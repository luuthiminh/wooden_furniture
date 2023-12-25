<template>
  <div class="">
    <div class="nav mt-14">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 ml-4 font-medium">
          <li class="breadcrumb-item text-sm font-semibold">
            <router-link to="/indexAssistant">Home</router-link>
          </li>
          <li
            class="breadcrumb-item text-sm active font-medium"
            aria-current="page"
          >
            Manage Materials
          </li>
        </ol>
      </nav>
    </div>
    <div class="font-semibold text-lg ml-4 pt-4 mb-6">All Materials</div>
    <span class="font-medium text-xs ml-6"
      >You can search, update, delete with material!
    </span>
    <div class="absolute right-0">
      <alert-Error v-if="isAlertError">
        <template v-slot:message>{{ messageError }}</template></alert-Error
      >
      <alert-success v-if="isAlertSuccess">
        <template v-slot:message>{{ messageSuccess }}</template>
      </alert-success>
      <alert-wanning v-if="isAlertWanning">
        <template v-slot:message>{{ messageWanning }}</template>
      </alert-wanning>
    </div>
    <div class="content_table pt-14 px-6 scroll">
      <div class="flex mb-4">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="font-semibold">Totally Materials:</p>
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
              <th scope="col">Repository</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-if="!searchResults.length">
            <tr class="text-sm" v-for="ma in materials" :key="ma.materialId">
              <td class="img">
                <img :src="ma.materialImage" alt="material" class="w-20" />
              </td>
              <td class="text-start">
                <span class="font-semibold block">{{ ma.materialName }}</span>
                <span class="text-xs">{{ ma.materialId }}</span>
              </td>
              <td>${{ ma.materialPrice }}</td>
              <td>{{ ma.description }}</td>
              <td>{{ ma.defaultSuplierId }}</td>
              <td>
                <div
                  v-for="repo in ma.available"
                  :key="repo.repositoryId"
                  class="mb-2"
                >
                  {{ repo.repositoryName }}
                </div>
              </td>
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
              <td>
                <div
                  class="px-2 py-1 bg-orange-600 w-20 text-white text-center"
                >
                  <button
                    class="btn_action"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('exportMaterial', 'null')"
                  >
                    Export
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
                    Add New Material
                  </div>
                </template>
                <template v-slot:body>
                  <div class="text-sm">
                    <div class="mx-4 mb-6 mt-2">
                      <div class="">
                        <label class="col-form-label fw-medium">Image</label>
                        <div class="">
                          <div class="flex">
                            <div class="avatar_upload ml-14 py-3">
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
                                  required
                                  @change="onFileChange"
                                />
                                <p
                                  class="text-xs mt-1 font-mediudm ml-1 opacity-90"
                                >
                                  You can upload image or video
                                </p>
                              </div>
                              <label
                                class="bi bi-pencil text-xs"
                                for="imageUpload"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium"
                          >Material Name</label
                        >
                        <div class="">
                          <input
                            v-model="materialName"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                            @input="validateName"
                            required
                          />
                          <p
                            v-if="!messageErrorName"
                            class="text-xs mt-1 font-mediudm ml-1 opacity-90"
                          >
                            Material name cannot be less than
                            <b>2</b> characters or exceed <b>30</b> characters
                          </p>
                          <p
                            v-else-if="messageSucessName"
                            class="success text-xs mt-1 font-mediudm ml-1 opacity-90"
                          >
                            {{ messageSucessName }}
                          </p>
                          <p
                            v-else
                            class="error text-xs mt-1 font-mediudm ml-1 opacity-90"
                          >
                            {{ messageErrorName }}
                          </p>
                        </div>
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium">Price</label>
                        <div class="">
                          <input
                            v-model="materialPrice"
                            type="number"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                            required
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium"
                          >Description</label
                        >
                        <div class="">
                          <input
                            v-model="materialDescription"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                            required
                            @input="validateDescription"
                          />
                          <p
                            v-if="!messageErrorDescription"
                            class="text-xs mt-1 font-mediudm ml-1 opacity-90"
                          >
                            Description cannot be less than
                            <b>2</b> characters or exceed <b>50</b> characters
                          </p>
                          <p
                            v-else-if="messageSucessDescription"
                            class="success text-xs mt-1 font-mediudm ml-1 opacity-90"
                          >
                            {{ messageSucessDescription }}
                          </p>
                          <p
                            v-else
                            class="error text-xs mt-1 font-mediudm ml-1 opacity-90"
                          >
                            {{ messageErrorDescription }}
                          </p>
                        </div>
                      </div>

                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="col-form-label font-medium"
                          >Default Suplier</label
                        >
                        <select
                          v-if="suppliers.length"
                          v-model="supplierId"
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option selected>Choose supplier</option>
                          <option
                            v-for="sup in suppliers"
                            :key="sup.supplierId"
                            :value="sup.supplierId"
                            required
                          >
                            {{ sup.supplierName }}
                          </option>
                        </select>
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
                    <div class="mx-4 mb-6 mt-2">
                      <div class="">
                        <label class="col-form-label fw-medium">Image</label>
                        <div class="">
                          <div class="flex">
                            <div class="avatar_upload ml-14 py-3">
                              <div v-if="urlMaterials">
                                <img
                                  v-if="!url"
                                  :src="urlMaterials"
                                  alt="image"
                                  class="w-8/12"
                                />
                                <img
                                  v-else-if="url"
                                  :src="url"
                                  alt="image"
                                  class="w-8/12"
                                />
                              </div>
                              <div v-else>
                                <img
                                  v-if="!url"
                                  src="@/assets/images/assistant/image_default.jpeg"
                                  alt="image"
                                />
                                <img
                                  v-else
                                  :src="url"
                                  alt="image"
                                  class="w-8/12"
                                />
                              </div>
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
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium">Name</label>
                        <div class="">
                          <input
                            v-model="materialNameModal"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium">Price</label>
                        <div class="">
                          <input
                            v-model="materialPriceModal"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium"
                          >Description</label
                        >
                        <div class="">
                          <input
                            v-model="materialDescriptionModal"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>

                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Default Suplier</label
                        >
                        <select
                          v-if="suppliers.length"
                          v-model="idSupModal"
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option selected>{{ idSupModal }}</option>
                          <option
                            v-for="sup in suppliers"
                            :key="sup.supplierId"
                            :value="sup.supplierId"
                          >
                            {{ sup.supplierName }}
                          </option>
                        </select>
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
                  <div class="flex items-center text-lg font-semibold">
                    Delete
                  </div>
                </template>
                <template v-slot:body>
                  <p class="text-base py-3 ml-32">
                    Are you sure detete <b> {{ materialNameModal }} ?</b>
                  </p>
                </template>
                <template v-slot:footer>
                  <div class="bg-red-900 rounded-md">
                    <span
                      type="button"
                      class="btn text-white"
                      data-dismiss="modal"
                      @click="HandleDelete"
                    >
                      Delete
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
                  <div class="grid grid-cols-12 gap-x-10 mt-3">
                    <label
                      for="exampleInputEmail1"
                      class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                      >Reason</label
                    >
                    <div class="col-span-8">
                      <input
                        v-model="reason"
                        type="text"
                        class="form-control"
                        id="exampleInpuName1"
                        aria-describedby="nameHelp"
                        required
                        @input="validateReason"
                      />
                      <p
                        v-if="!messageErrorReason"
                        class="text-xs mt-1 font-mediudm ml-1 opacity-90"
                      >
                        Reason cannot be less than
                        <b>2</b> characters or exceed <b>300</b> characters
                      </p>
                      <p
                        v-else-if="messageSucessReason"
                        class="success text-xs mt-1 font-mediudm ml-1 opacity-90"
                      >
                        {{ messageSucessReason }}
                      </p>
                      <p
                        v-else
                        class="error text-xs mt-1 font-mediudm ml-1 opacity-90"
                      >
                        {{ messageErrorReason }}
                      </p>
                    </div>
                  </div>
                </template>
                <template v-slot:footer>
                  <div class="bg-yellow-900 rounded-md">
                    <span
                      type="button"
                      class="btn text-white"
                      data-dismiss="modal"
                      @click="HandleExportMaterial(ma)"
                    >
                      Export
                    </span>
                  </div>
                </template>
              </modal>
            </tr>
          </tbody>
          <tbody v-else>
            <tr
              class="text-sm"
              v-for="ma in searchResults"
              :key="ma.materialId"
            >
              <td class="img">
                <img :src="ma.materialImage" alt="material" class="w-20" />
              </td>
              <td class="text-start">
                <span class="font-semibold block">{{ ma.materialName }}</span>
                <span class="text-xs">{{ ma.materialId }}</span>
              </td>
              <td>${{ ma.materialPrice }}</td>
              <td>{{ ma.description }}</td>
              <td>{{ ma.defaultSuplierId }}</td>
              <td>
                <div
                  v-for="repo in ma.available"
                  :key="repo.repositoryId"
                  class="mb-2"
                >
                  {{ repo.repositoryName }}
                </div>
              </td>
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
              <td>
                <div
                  class="px-2 py-1 bg-orange-600 w-20 text-white text-center"
                >
                  <button
                    class="btn_action"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('exportMaterial', 'null')"
                  >
                    Export
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
                    Add New Material
                  </div>
                </template>
                <template v-slot:body>
                  <div class="text-sm">
                    <div class="mx-4 mb-6 mt-2">
                      <div class="">
                        <label class="col-form-label fw-medium">Image</label>
                        <div class="">
                          <div class="flex">
                            <div class="avatar_upload ml-14 py-3">
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
                                  required
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
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium"
                          >Material Name</label
                        >
                        <div class="">
                          <input
                            v-model="materialName"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                            required
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium">Price</label>
                        <div class="">
                          <input
                            v-model="materialPrice"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                            required
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium"
                          >Description</label
                        >
                        <div class="">
                          <input
                            v-model="materialDescription"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                            required
                          />
                        </div>
                      </div>

                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="col-form-label font-medium"
                          >Default Suplier</label
                        >
                        <select
                          v-if="suppliers.length"
                          v-model="supplierId"
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option selected>Choose supplier</option>
                          <option
                            v-for="sup in suppliers"
                            :key="sup.supplierId"
                            :value="sup.supplierId"
                            required
                          >
                            {{ sup.supplierName }}
                          </option>
                        </select>
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
                    <div class="mx-4 mb-6 mt-2">
                      <div class="">
                        <label class="col-form-label fw-medium">Image</label>
                        <div class="">
                          <div class="flex">
                            <div class="avatar_upload ml-14 py-3">
                              <div v-if="urlMaterials">
                                <img
                                  v-if="!url"
                                  :src="urlMaterials"
                                  alt="image"
                                  class="w-8/12"
                                />
                                <img
                                  v-else-if="url"
                                  :src="url"
                                  alt="image"
                                  class="w-8/12"
                                />
                              </div>
                              <div v-else>
                                <img
                                  v-if="!url"
                                  src="@/assets/images/assistant/image_default.jpeg"
                                  alt="image"
                                />
                                <img
                                  v-else
                                  :src="url"
                                  alt="image"
                                  class="w-8/12"
                                />
                              </div>
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
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium">Name</label>
                        <div class="">
                          <input
                            v-model="materialNameModal"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium">Price</label>
                        <div class="">
                          <input
                            v-model="materialPriceModal"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <label class="col-form-label fw-medium"
                          >Description</label
                        >
                        <div class="">
                          <input
                            v-model="materialDescriptionModal"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>

                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Default Suplier</label
                        >
                        <select
                          v-if="suppliers.length"
                          v-model="idSupModal"
                          class="form-select text-sm"
                          aria-label="Default select example"
                        >
                          <option selected>{{ idSupModal }}</option>
                          <option
                            v-for="sup in suppliers"
                            :key="sup.supplierId"
                            :value="sup.supplierId"
                          >
                            {{ sup.supplierName }}
                          </option>
                        </select>
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
                  <div class="flex items-center text-lg font-semibold">
                    Delete
                  </div>
                </template>
                <template v-slot:body>
                  <p class="text-base py-3 ml-32">
                    Are you sure detete <b> {{ materialNameModal }} ?</b>
                  </p>
                </template>
                <template v-slot:footer>
                  <div class="bg-red-900 rounded-md">
                    <span
                      type="button"
                      class="btn text-white"
                      data-dismiss="modal"
                      @click="HandleDelete"
                    >
                      Delete
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
                      type="number"
                      class="col-span-8 form-control"
                      id="exampleInpuName1"
                      aria-describedby="nameHelp"
                      required
                    />
                  </div>
                  <div class="grid grid-cols-12 gap-x-10 mt-3">
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
                      @input="validateReason"
                    />
                  </div>
                </template>
                <template v-slot:footer>
                  <div class="bg-yellow-900 rounded-md">
                    <span
                      type="button"
                      class="btn text-white"
                      data-dismiss="modal"
                      @click="HandleExportMaterial(ma)"
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
  <!-- </div> -->
</template>
<script>
import axios from "axios";
import modal from "@/components/ModalPage.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import alertWanning from "@/components/AlertWanning.vue";
export default {
  components: {
    modal,
    alertError,
    alertSuccess,
    alertWanning,
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
      isAlertSuccess: false,
      isAlertError: false,
      isAlertWanning: false,
      messageError: null,
      messageSuccess: null,
      messageWanning: null,
      keyword: "",
      urlMaterials: "",
      suppliers: [],
      idSupModal: "",
      messageErrorName: "",
      messageSucessName: "",
      messageErrorDescription: "",
      messageSucessDescription: "",
      messageErrorReason: "",
      messageSucessReason: "",
      isDismissModal: false,
      isShowMessage: false,
    };
  },
  created() {
    this.getMaterial();
    this.getSuppliers();
    console.log(this.$store.state.searchMatarial);
  },
  methods: {
    async getMaterial() {
      try {
        const response = await axios.get("Assistant/shop-data/materials");
        this.materials = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getSuppliers() {
      try {
        const response = await axios.get("shopOwner/shop-data/suppliers");
        this.suppliers = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async opentModal(type, ma) {
      this.modalType = type;
      this.urlMaterials = ma.materialImage;
      this.materialIdModal = ma.materialId;
      this.materialNameModal = ma.materialName;
      this.materialPriceModal = ma.materialPrice;
      this.materialDescriptionModal = ma.description;
      this.materialSuplierModal = ma.defaultSuplierId;
      this.idSupModal = ma.defaultSuplierId;
    },
    closeModal() {
      this.modalType = null;
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
    validateName() {
      this.isShowMessage = true;
      if (
        !this.materialName ||
        this.materialName.length < 2 ||
        this.materialName.length > 50
      ) {
        this.messageErrorName = "Name Material is invalid.";
        this.isDismissModal = false;
      } else {
        this.messageSucessName = "Name Material is valid.";
        this.isDismissModal = true;
      }
    },
    validateDescription() {
      this.isShowMessage = true;
      if (
        !this.materialDescription ||
        this.materialDescription.length < 2 ||
        this.materialDescription.length > 50
      ) {
        this.messageErrorDescription = "Description is invalid.";
        this.isDismissModal = false;
      } else {
        this.messageSucessDescription = "Description is valid";
        this.isDismissModal = true;
      }
    },
    validateReason() {
      this.isShowMessage = true;
      if (!this.reason || this.reason.length < 2 || this.reason.length > 300) {
        this.messageErrorReason = "Reason is invalid.";
        this.isDismissModal = false;
      } else {
        this.messageSucessReason = "Reason is valid";
        this.isDismissModal = true;
      }
    },
    async AddMaterial() {
      const formData = new FormData();
      formData.append("materialName", this.materialName);
      formData.append("materialPrice", this.materialPrice);
      formData.append("description", this.materialDescription);
      formData.append("DefaultSuplierId", this.supplierId);
      formData.append("UploadImage", this.file);
      formData.append("Items", this.materialDescription);
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
          this.isAlertSuccess = true;
          this.messageSuccess = "Add new material successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 3000);
          this.getMaterial();
        }
      } catch (error) {
        this.modalType = null;
        this.isAlertError = true;
        this.messageError = "Add new material error";
        setTimeout(() => {
          this.isAlertError = false;
        }, 3000);
        console.error(error);
      }
    },
    async updateMaterial() {
      const formData = new FormData();
      formData.append("MaterialId", this.materialIdModal);
      formData.append("MaterialName", this.materialNameModal);
      formData.append("MaterialPrice", this.materialPriceModal);
      formData.append("Description", this.materialDescriptionModal);
      formData.append("DefaultSuplierId", this.idSupModal);
      if (this.file != null) {
        formData.append("UploadImage", this.file);
      } else formData.append("UploadImage", this.urlMaterials);
      try {
        const response = await axios.put(
          "assistant/shop-data/materials/edit",
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
            "Update " + this.materialNameModal + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getMaterial();
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
    async HandleDelete() {
      try {
        const response = await axios.delete(
          "assistant/shop-data/materials/delete/" + this.materialIdModal
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          this.isAlertSuccess = true;
          this.messageSuccess =
            "Delete " + this.materialNameModal + " successful!";
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
          this.getMaterial();
        }
      } catch (error) {
        this.isAlertError = true;
        this.messagerError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
      }
    },
    async HandleExportMaterial(ma) {
      try {
        const response = await axios.post(
          "assistant/warehouse/repositories/" +
            ma.materialId +
            "/export-material",
          {
            Items: [
              {
                Id: ma.materialId,
                Quantity: this.quantity,
              },
            ],
            ExportReason: this.reason,
          }
        );
        if (response.status === 201) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Export successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllReponsitory();
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    searchResults() {
      return this.$store.state.searchMaterial;
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
