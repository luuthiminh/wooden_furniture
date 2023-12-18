<template>
  <div class="">
    <div class="nav">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-4">
          <li class="breadcrumb-item font-semibold"><a href="#">Home</a></li>

          <li class="breadcrumb-item active font-medium" aria-current="page">
            Manage Reponsitories
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
      <h1 class="font-semibold text-xl py-6">Manage Reponsitories</h1>
      <div class="flex gap-x-40 pt-10">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="gap-x-2 font-semibold">Totally reponsitories:</p>
          {{ reponsitories.length }}
        </div>
        <div class="search_assistant">
          <div class="container">
            <input
              v-model="keyword"
              type="text"
              name="text"
              class="input"
              placeholder="search"
              @keyup.enter="handleSearch"
            />
            <button
              class="search__btn bg-gradient-to-r from-yellow-700 to-orange-800 opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path
                  d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                  fill="#efeff1"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="absolute right-10 flex gap-x-10">
          <a
            style="text-decoration: none"
            href="https://landlstore.azurewebsites.net/api/assistant/warehouse/repositories/material-repository-history/to-csv"
            class="download-button"
          >
            <div class="docs">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                ></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              CSV Material
            </div>
            <div class="download">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
          </a>
          <a
            style="text-decoration: none"
            href="https://landlstore.azurewebsites.net/api/assistant/warehouse/repositories/furniture-repository-history/to-csv"
            class="download-button"
          >
            <div class="docs">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                ></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              CSV Furniture
            </div>
            <div class="download">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
          </a>
          <button
            type="button"
            class="button_add ring-offset-2 ring-2 bg-lime-700 ring-lime-300 hover:ring-lime-600 text-sm rounded-md"
            data-toggle="modal"
            data-target="#exampleModalLong"
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
      </div>
      <div class="content_table scroll">
        <div v-if="!searchResults.length" class="pt-10">
          <table
            v-if="reponsitories.length"
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md mt-5"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Address Id</th>
                <th scope="col">Capacity</th>
                <th scope="col">IsFull</th>
                <th scope="col">Creation Date</th>
                <th scope="col">Material</th>
                <th scope="col">Furniture</th>
              </tr>
            </thead>
            <tbody v-for="re in reponsitories" :key="re.reponsitoryId">
              <tr class="text-sm">
                <th scope="row">{{ re.repositoryId }}</th>
                <td>
                  <router-link
                    :to="{
                      name: 'DetailRepository',
                      params: { id: re.repositoryId },
                    }"
                  >
                    {{ re.repositoryName }}
                  </router-link>
                </td>
                <td>{{ re.addressId }}</td>
                <td>{{ re.capacity }}</td>
                <td>{{ re.isFull }}</td>
                <td>{{ re.creationDate }}</td>
                <td class="flex justify-center">
                  <div
                    class="px-2 py-2 bg-orange-500 w-20 rounded-md text-white"
                  >
                    <button
                      class="btn_action"
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-backdrop="false"
                      @click="opentModal('material', re)"
                    >
                      Import
                    </button>
                  </div>
                </td>
                <td class="justify-items-center">
                  <div
                    class="px-2 py-2 bg-orange-500 w-20 rounded-md text-white"
                  >
                    <button
                      class="btn_action"
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-dismiss="modal"
                      data-backdrop="false"
                      @click="opentModal('furniture', re)"
                    >
                      Import
                    </button>
                  </div>
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
                      Add New Repository
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="text-sm text-left">
                      <div class="mx-2 my-2">
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Repository Name</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="repName"
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
                            >Stress</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="stress"
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
                              v-model="ward"
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
                              v-model="district"
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
                              v-model="province"
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
                              v-model="capacity"
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
                        @click="HandleAdd"
                      >
                        Add
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'material'"
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
                    <div class="text-sm text-left">
                      <div class="mx-4 mb-6">
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Material</label
                          >
                          <div class="col-lg-8">
                            <select
                              v-if="materials.length"
                              class="form-select"
                              aria-label="Default select example"
                              v-model="materialId"
                            >
                              <option selected class="font-medium">
                                Choose material
                              </option>
                              <option
                                v-for="ma in materials"
                                :key="ma.materialId"
                                :value="ma.materialId"
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
                              v-model="quantities"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Reason</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="reason"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Creation Date
                          </label>
                          <div class="col-lg-8">
                            <input
                              v-model="creationDate"
                              type="date"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
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
                        @click.prevent="HandleImportMaterial"
                      >
                        Add
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'furniture'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Import Furniture
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="text-sm text-left">
                      <div class="mx-4 mb-6">
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Furniture</label
                          >
                          <div class="col-lg-8">
                            <select
                              v-if="furnitures.length"
                              class="form-select"
                              aria-label="Default select example"
                              v-model="furId"
                              @change="handleFurnitureSpecification"
                            >
                              <option selected class="font-medium">
                                Choose furniture
                              </option>
                              <option
                                v-for="fur in furnitures"
                                :key="fur.furnitureId"
                                :value="fur.furnitureId"
                              >
                                {{ fur.furnitureName }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Furniture Specification</label
                          >
                          <div class="col-lg-8">
                            <select
                              v-if="furnitures.length"
                              class="form-select"
                              aria-label="Default select example"
                              v-model="furId"
                            >
                              <option selected class="font-medium">
                                Choose Furniture Specification
                              </option>
                              <option
                                v-for="furSpe in furnitureSpe"
                                :key="furSpe.furnitureSpecificationId"
                                :value="furSpe.furnitureSpecificationId"
                              >
                                {{ furSpe.furnitureSpecificationName }}
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
                              v-model="quantities"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Reason</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="reason"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Creation Date
                          </label>
                          <div class="col-lg-8">
                            <input
                              v-model="creationDate"
                              type="date"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
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
                        @click.prevent="HandleImportFurniture"
                      >
                        Import
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'exportMaterial'"
                  @close="closeModal"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Export Material
                    </div>
                  </template>
                  <template v-slot:body>
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
                    <div class="grid grid-cols-12 gap-x-10">
                      <label
                        for="exampleInputEmail1"
                        class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                        >Reason</label
                      >
                      <input
                        v-model="reason"
                        type="text"
                        class="col-span-8 form-control"
                        id="exampleInpuName1"
                        aria-describedby="nameHelp"
                        required
                      />
                    </div>
                    <div class="grid grid-cols-12 gap-x-10">
                      <label
                        for="exampleInputEmail1"
                        class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                        >Date</label
                      >
                      <input
                        v-model="dateExport"
                        type="date"
                        class="col-span-8 form-control"
                        id="exampleInpuName1"
                        aria-describedby="nameHelp"
                        required
                      />
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click="HandleExportMaterial(re)"
                      >
                        Export
                      </span>
                    </div>
                  </template>
                </modal>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="pt-10">
          <table
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md mt-5"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Address Id</th>
                <th scope="col">Capacity</th>
                <th scope="col">IsFull</th>
                <th scope="col">Creation Date</th>
                <th scope="col">Material</th>
                <th scope="col">Furniture</th>
              </tr>
            </thead>
            <tbody v-for="re in searchResults" :key="re.reponsitoryId">
              <tr class="text-sm">
                <th scope="row">{{ re.repositoryId }}</th>
                <td>
                  <router-link
                    :to="{
                      name: 'DetailRepository',
                      params: { id: re.repositoryId },
                    }"
                  >
                    {{ re.repositoryName }}
                  </router-link>
                </td>
                <td>{{ re.addressId }}</td>
                <td>{{ re.capacity }}</td>
                <td>{{ re.isFull }}</td>
                <td>{{ re.creationDate }}</td>
                <td class="flex justify-center">
                  <div
                    class="px-2 py-2 bg-orange-500 w-20 rounded-md text-white"
                  >
                    <button
                      class="btn_action"
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-backdrop="false"
                      @click="opentModal('material', re)"
                    >
                      Import
                    </button>
                  </div>
                </td>
                <td class="justify-items-center">
                  <div
                    class="px-2 py-2 bg-orange-500 w-20 rounded-md text-white"
                  >
                    <button
                      class="btn_action"
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-dismiss="modal"
                      data-backdrop="false"
                      @click="opentModal('furniture', re)"
                    >
                      Import
                    </button>
                  </div>
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
                      Add New Repository
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="text-sm text-left">
                      <div class="mx-2 my-2">
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Repository Name</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="repName"
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
                            >Stress</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="stress"
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
                              v-model="ward"
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
                              v-model="district"
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
                              v-model="province"
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
                              v-model="capacity"
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
                        @click="HandleAdd"
                      >
                        Add
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'material'"
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
                    <div class="text-sm text-left">
                      <div class="mx-4 mb-6">
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Material</label
                          >
                          <div class="col-lg-8">
                            <select
                              v-if="materials.length"
                              class="form-select"
                              aria-label="Default select example"
                              v-model="materialId"
                            >
                              <option selected class="font-medium">
                                Choose material
                              </option>
                              <option
                                v-for="ma in materials"
                                :key="ma.materialId"
                                :value="ma.materialId"
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
                              v-model="quantities"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Reason</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="reason"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Creation Date
                          </label>
                          <div class="col-lg-8">
                            <input
                              v-model="creationDate"
                              type="date"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
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
                        @click.prevent="HandleImportMaterial"
                      >
                        Add
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'furniture'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Import Furniture
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="text-sm text-left">
                      <div class="mx-4 mb-6">
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Furniture</label
                          >
                          <div class="col-lg-8">
                            <select
                              v-if="furnitures.length"
                              class="form-select"
                              aria-label="Default select example"
                              v-model="furId"
                              @change="handleFurnitureSpecification"
                            >
                              <option selected class="font-medium">
                                Choose furniture
                              </option>
                              <option
                                v-for="fur in furnitures"
                                :key="fur.furnitureId"
                                :value="fur.furnitureId"
                              >
                                {{ fur.furnitureName }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Furniture Specification</label
                          >
                          <div class="col-lg-8">
                            <select
                              v-if="furnitures.length"
                              class="form-select"
                              aria-label="Default select example"
                              v-model="furId"
                            >
                              <option selected class="font-medium">
                                Choose Furniture Specification
                              </option>
                              <option
                                v-for="furSpe in furnitureSpe"
                                :key="furSpe.furnitureSpecificationId"
                                :value="furSpe.furnitureSpecificationId"
                              >
                                {{ furSpe.furnitureSpecificationName }}
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
                              v-model="quantities"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Reason</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="reason"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Creation Date
                          </label>
                          <div class="col-lg-8">
                            <input
                              v-model="creationDate"
                              type="date"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
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
                        @click.prevent="HandleImportFurniture"
                      >
                        Import
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'exportMaterial'"
                  @close="closeModal"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Export Material
                    </div>
                  </template>
                  <template v-slot:body>
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
                    <div class="grid grid-cols-12 gap-x-10">
                      <label
                        for="exampleInputEmail1"
                        class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                        >Reason</label
                      >
                      <input
                        v-model="reason"
                        type="text"
                        class="col-span-8 form-control"
                        id="exampleInpuName1"
                        aria-describedby="nameHelp"
                        required
                      />
                    </div>
                    <div class="grid grid-cols-12 gap-x-10">
                      <label
                        for="exampleInputEmail1"
                        class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                        >Date</label
                      >
                      <input
                        v-model="dateExport"
                        type="date"
                        class="col-span-8 form-control"
                        id="exampleInpuName1"
                        aria-describedby="nameHelp"
                        required
                      />
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click="HandleExportMaterial(re)"
                      >
                        Export
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
      reponsitories: [],
      materials: [],
      furnitures: [],
      furnitureSpe: [],
      modalType: null,
      nameRepoModal: null,
      idRepoModal: null,
      capacityModal: null,
      isFullModal: null,
      stressModal: null,
      wardModal: null,
      districtModal: null,
      provinceModal: null,
      isSuccess: false,
      isAlertSuccess: false,
      isAlertError: false,
      messageError: null,
      messageSuccess: null,
    };
  },
  created() {
    this.getAllReponsitory();
    this.getMaterial();
    this.getFurnitures();
  },
  methods: {
    async getAllReponsitory() {
      try {
        const response = await axios.get("assistant/warehouse/repositories");
        if (response.status == 200) {
          this.reponsitories = response.data;
          for (let i = 0; i < this.reponsitories.length; i++) {
            const date = new Date(this.reponsitories[i].creationDate);
            this.reponsitories[i].creationDate = format(date, "dd/MM/yyyy");
          }
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
    async opentModal(type, re) {
      this.modalType = type;
      this.idRepoModal = re.repositoryId;
      this.nameRepoModal = re.repositoryName;
      this.capacityModal = re.capacity;
      this.isFullModal = re.isFull;
      this.stressModal = re.stress;
      this.wardModal = re.ward;
      this.districtModal = re.district;
      this.provinceModal = re.province;
    },
    async getFurnitures() {
      try {
        const response = await axios.get("customer/furnitures");
        this.furnitures = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    closeModal() {
      this.modalType = null;
    },
    async HandleAdd() {
      const formData = new FormData();
      formData.append("repositoryName", this.repName);
      formData.append("Street", this.stress);
      formData.append("ward", this.ward);
      formData.append("district", this.district);
      formData.append("province", this.province);
      formData.append("capacity", this.capacity);
      try {
        const response = await axios.post(
          "assistant/warehouse/repositories/add",
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
          this.messageSuccess = "Add new repository successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllReponsitory();
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
    async HandleImportMaterial() {
      try {
        const response = await axios.post(
          "assistant/warehouse/repositories/" +
            this.idRepoModal +
            "/import-material",
          {
            Items: [
              {
                Id: this.materialId,
                Quantity: this.quantities,
                ImportReason: this.reason,
                CreationDate: this.creationDate,
              },
            ],
            ImportReason: this.reason,
          }
        );
        if (response.status === 201) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Add new repository successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllReponsitory();
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
    async HandleImportFurniture() {
      try {
        const response = await axios.post(
          "assistant/warehouse/repositories/" +
            this.idRepoModal +
            "/import-furniture",
          {
            Items: [
              {
                Id: "FS-AF1D4CA5-2C20-400D-8C9C-F86C1FB5D878",
                FurnituresId: this.furId,
                Quantity: this.quantities,
              },
            ],
            userInput: [
              {
                ImportDate: this.creationDate,
              },
            ],
            ImportReason: this.reason,
          }
        );
        if (response.status === 201) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Import furniture successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllReponsitory();
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
    async handleFurnitureSpecification() {
      try {
        const response = await axios.get("customer/furnitures/" + this.furId);
        this.furnitureSpe = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    handleSearch() {
      this.$store.dispatch("searchReposAssistant", {
        keyword: this.keyword,
      });
    },
  },
  computed: {
    searchResults() {
      return this.$store.state.searchRepos;
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

.form-control,
.form-select {
  border: none;
  background-color: #dde4e794;
}
tabel {
  width: 98em;
  overflow: scroll;
}
.download-button {
  position: relative;
  border-width: 0;
  color: rgb(19, 19, 19);
  font-size: 15px;
  font-weight: 600;
  border-radius: 4px;
  z-index: 1;
}

.download-button .docs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-height: 35px;
  padding: 0 7px;
  border-radius: 4px;
  z-index: 1;
  background-color: white;
  border: solid 2px #a157122d;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  font-size: 13px;
  color: #39230b;
}

.download-button:hover {
  box-shadow: rgba(233, 233, 233, 0.555) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.download {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
  z-index: -1;
  border-radius: 0px 0px 4px 4px;
  transform: translateY(0%);
  background-color: #0ea20b;
  border: solid 1px #01e0572d;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  color: white;
}

.download-button:hover .download {
  transform: translateY(100%);
}

.download svg polyline,
.download svg line {
  animation: docs 1s infinite;
}

@keyframes docs {
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(-15%);
  }

  100% {
    transform: translateY(0%);
  }
}
</style>
