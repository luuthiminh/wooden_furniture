<template>
  <!-- <div v-if="customer / customer - infor"> -->
  <div class="profile_customer">
    <div class="nav pt-36 pb-3 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item">
            <router-link to="customerIndex">Home </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="#">Profile</router-link>
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
      <alert-wanning v-if="isAlertWanning">
        <template v-slot:message>{{ messageWanning }}</template>
      </alert-wanning>
    </div>
    <div class="mx-28 max-md:mx-4">
      <div class="view-account">
        <section class="module">
          <div class="module-inner grid grid-cols-6 max-md:grid-cols-4">
            <div class="side-bar col-span-1">
              <div class="user-info">
                <!-- <img :src="avatar" alt="avatar" /> -->
                <img
                  class="rounded-md"
                  src="@/assets/images/avatar.jpg"
                  alt=""
                />
                <ul class="meta list list-unstyled">
                  <li class="name">{{ info.firstName }} {{ info.lastName }}</li>
                  <li class="activity text-sm">
                    Last logged in: Today at 2:18pm
                  </li>
                </ul>
              </div>
              <nav class="side-menu max-md:mx-6">
                <ul class="nav nav-stacked" role="tablist">
                  <li role="presentation" class="active">
                    <a
                      href="#profile"
                      aria-controls="profile"
                      role="tab"
                      data-toggle="tab"
                      ><span class="fa fa-user"></span> Profile</a
                    >
                  </li>
                  <li role="presentation">
                    <a
                      href="#settings"
                      aria-controls="settings"
                      role="tab"
                      data-toggle="tab"
                      ><span class="fa fa-cog"></span> Setting</a
                    >
                  </li>
                  <li role="presentation">
                    <a
                      href="#address"
                      aria-controls="address"
                      role="tab"
                      data-toggle="tab"
                      ><span class="fa-solid fa-location-dot"></span> Address</a
                    >
                  </li>
                  <li role="presentation">
                    <a
                      href="#wishlist"
                      aria-controls="wishlist"
                      role="tab"
                      data-toggle="tab"
                      ><span class="fa-solid fa-heart"></span> WishList</a
                    >
                  </li>
                  <li role="presentation">
                    <a
                      href="#warranty"
                      aria-controls="warranty"
                      role="tab"
                      data-toggle="tab"
                      ><span class="fa-solid fa-shield-halved"></span> Warranty
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#order"
                      aria-controls="order"
                      role="tab"
                      data-toggle="tab"
                      ><span class="fa-solid fa-truck-fast"></span> Order</a
                    >
                  </li>
                  <li role="presentation">
                    <a
                      href="#customize"
                      aria-controls="customize"
                      role="tab"
                      data-toggle="tab"
                      ><span class="fa-solid fa-truck-fast"></span> Customize
                      Furniture</a
                    >
                  </li>
                </ul>
              </nav>
              <div class="">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="@/assets/images/advertisement/customize.png"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="@/assets/images/tips/4.png"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="@/assets/images/tips/1.png"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <!-- Tab panes -->
            <div class="tab-content col-span-5 ml-10 max-md:col-span-3">
              <div role="tabpanel" class="tab-pane" id="profile">
                <div class="bg-white form">
                  <h1
                    class="py-3 font-semibold text-base pl-10 text-yellow-950"
                  >
                    Information
                  </h1>
                  <div
                    class="border-dotted border-1 border-indigo-gray opacity-20"
                  ></div>
                  <div class="infor py-6 px-10">
                    <div class="row mb-4 flex">
                      <label class="col-lg-4 font-medium text-sm text-slate-600"
                        >First Name</label
                      >
                      <label
                        class="col-lg-8 font-semibold text-sm text-yellow-950"
                        >{{ info.firstName }}</label
                      >
                    </div>
                    <div class="row mb-4 flex">
                      <label class="col-lg-4 font-medium text-sm text-slate-600"
                        >Last Name</label
                      >
                      <label
                        class="col-lg-8 font-semibold text-sm text-yellow-950"
                        >{{ info.lastName }}</label
                      >
                    </div>
                    <div class="row mb-4 flex">
                      <label class="col-lg-4 font-medium text-sm text-slate-600"
                        >Email</label
                      >
                      <label
                        class="col-lg-8 font-semibold text-sm text-yellow-950"
                        >{{ info.email }}</label
                      >
                    </div>
                    <div class="row mb-4 flex">
                      <label class="col-lg-4 font-medium text-sm text-slate-600"
                        >Gender</label
                      >
                      <label
                        class="col-lg-8 font-semibold text-sm text-yellow-950"
                        >{{ info.gender }}</label
                      >
                    </div>
                    <div class="row mb-4 flex">
                      <label class="col-lg-4 font-medium text-sm text-slate-600"
                        >DoB</label
                      >
                      <label
                        class="col-lg-8 font-semibold text-sm text-yellow-950"
                        >{{ DoB }}</label
                      >
                    </div>

                    <div class="row mb-4 flex">
                      <label class="col-lg-4 font-medium text-sm text-slate-600"
                        >Spent</label
                      >
                      <label
                        class="col-lg-8 font-semibold text-sm text-yellow-950"
                        >{{ info.spent }}</label
                      >
                    </div>
                    <div class="row mb-4 flex">
                      <label class="col-lg-4 font-medium text-sm text-slate-600"
                        >Debit</label
                      >
                      <label
                        class="col-lg-8 font-semibold text-sm text-yellow-950"
                        >{{ info.debit }}</label
                      >
                    </div>
                    <div class="row mb-4 flex">
                      <label class="col-lg-4 font-medium text-sm text-slate-600"
                        >Phone</label
                      >
                      <div class="col-lg-8 font-semibold text-sm flex gap-x-5">
                        <label class="text-yellow-950" for="">{{
                          info.phoneNumber
                        }}</label>

                        <div v-if="info.phoneNumberConfirmed === false">
                          <button
                            @click="opentModalCF('otp')"
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-blue-900 hover:ring-blue-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                          >
                            Confirm
                          </button>
                          <modal
                            v-if="modalType == 'otp'"
                            @close="closeModal"
                            data-target="#myModal"
                          >
                            <template v-slot:title>
                              <div
                                class="flex items-center text-lg font-semibold"
                              >
                                Enter your OTP Code
                              </div>
                            </template>
                            <template v-slot:body>
                              <div class="inp_otp mt-2">
                                <input
                                  maxlength="1"
                                  class="input"
                                  type="text"
                                  placeholder=""
                                />
                                <input
                                  maxlength="1"
                                  class="input"
                                  type="text"
                                  placeholder=""
                                />
                                <input
                                  maxlength="1"
                                  class="input"
                                  type="text"
                                  placeholder=""
                                />
                                <input
                                  maxlength="1"
                                  class="input"
                                  type="text"
                                  placeholder=""
                                />
                              </div>
                              <p
                                class="mt-14 text-xs text-slate-600 text-center"
                              >
                                Please check your number phone!
                              </p>
                            </template>
                            <template v-slot:footer>
                              <div class="button_otp flex justify-between">
                                <button @click.prevent="confirmNumberPhone">
                                  Verify
                                </button>
                              </div>
                            </template>
                          </modal>
                        </div>
                        <button
                          @click="opentModal('change')"
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-red-800 hover:ring-red-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                        >
                          Change
                        </button>
                        <modal
                          v-if="modalType == 'change'"
                          @close="modalType == null"
                          data-target="#myModal"
                        >
                          <template v-slot:title>
                            <div
                              class="flex items-center text-lg font-semibold"
                            >
                              Change Number Phone
                            </div>
                          </template>
                          <template v-slot:body>
                            <div class="py-3 pr-36 text-sm">
                              <span class="text-sm text-gray-700">
                                {{ messageWanning }}
                              </span>
                              <label
                                for="exampleInputEmail1"
                                class="col-span-4 form-label text-semibold font-base pt-2 border-none"
                                >New Phone</label
                              >
                              <div class="grid grid-cols-2">
                                <input
                                  v-model="info.phoneNumber"
                                  type="text"
                                  class="col-span-8 form-control"
                                  id="exampleInpuName1"
                                  aria-describedby="nameHelp"
                                  required
                                />

                                <label
                                  for="exampleInputEmail1"
                                  class="col-span-4 form-label text-semibold font-base pt-2 border-none"
                                  >Verification Code</label
                                >
                              </div>
                              <div class="mt-3">
                                <input
                                  v-model="otp"
                                  type="text"
                                  class="form-control"
                                  id="exampleInpuName1"
                                  aria-describedby="nameHelp"
                                  required
                                />
                                <div class="bg-slate-300 rounded-md">
                                  <span
                                    type="button"
                                    class="btn text-white"
                                    @click.prevent="confirmNumberPhone"
                                  >
                                    Send Otp
                                  </span>
                                </div>
                              </div>
                            </div>
                          </template>
                          <template v-slot:footer>
                            <div class="bg-slate-800 rounded-md">
                              <span
                                type="button"
                                class="btn text-white"
                                @click.prevent="HandleUpdatePhone"
                              >
                                Save changes
                              </span>
                            </div>
                          </template>
                        </modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="settings">
                <div class="form bg-white">
                  <h1
                    class="py-3 font-semibold text-base pl-10 text-yellow-950"
                  >
                    Edit Information
                  </h1>
                  <div
                    class="border-dotted border-1 border-indigo-gray opacity-20"
                  ></div>
                  <div class="mx-10 my-10">
                    <form @submit.prevent="updateInfor">
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Avatar</label
                        >
                        <div class="col-lg-8">
                          <div class="flex">
                            <div class="avatar_upload">
                              <img v-if="url" :src="url" alt="Avatar" />
                              <img
                                v-else
                                src="@/assets/images/avatar_default.jpg"
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
                          <!-- <div class="avatar_upload">
                          <img v-if="url" :src="url" alt="Avatar" />
                        </div> -->
                          <!-- <img :src="getPostAvatar(info)" /> -->
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >First Name</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="info.firtName"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Last Name</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="info.lastName"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Gender</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="info.gender"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >DoB</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="DoB"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="my-1 pb-16">
                        <button type="submit" class="btn my-2 float-right">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="form bg-white card mb-5 mb-xl-10 mt-10">
                  <p class="py-3 font-semibold text-base pl-10 text-yellow-950">
                    Change Password
                  </p>
                  <div
                    class="border-dotted border-1 border-indigo-gray opacity-20"
                  ></div>
                  <div class="mx-10 my-6">
                    <div class="row mb-6">
                      <label class="col-lg-4 col-form-label fw-medium"
                        >New Password</label
                      >
                      <div class="col-lg-8">
                        <input
                          v-model="password"
                          type="text"
                          class="form-control border-none bg-neutral-100"
                          id="firstname"
                          aria-describedby="firstnameHelp"
                        />
                      </div>
                    </div>
                    <div class="row mb-6">
                      <label class="col-lg-4 col-form-label fw-medium"
                        >Comfirm Password</label
                      >
                      <div class="col-lg-8">
                        <input
                          v-model="comfirmPassword"
                          type="text"
                          class="form-control border-none bg-neutral-100"
                          id="firstname"
                          aria-describedby="firstnameHelp"
                        />
                      </div>
                    </div>
                    <div class="my-1 pb-4">
                      <button
                        @click="UpdatePasssword"
                        type="submit"
                        class="btn my-2 float-right"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="address">
                <div class="form bg-white">
                  <h1
                    class="py-3 font-semibold text-base pl-10 text-yellow-950"
                  >
                    Billing Address
                  </h1>
                  <div
                    class="border-dotted border-1 border-indigo-gray opacity-20"
                  ></div>
                  <div class="px-4 py-3" v-if="address.length">
                    <!-- <h2 class="pt-3 py-8 px-3 font-medium text-yellow-950">
                      Address
                    </h2> -->
                    <div
                      class="flex gap-x-10 py-3"
                      v-for="ad in address"
                      :key="ad.id"
                    >
                      <span class="span_address font-medium pl-3"
                        >{{ ad.street }} {{ ad.ward }} {{ ad.district }}
                        {{ ad.provine }}</span
                      >
                      <div
                        v-if="ad.addressType === 'DEFAULT'"
                        class="span_address"
                      >
                        <div
                          class="border-solid border-2 border-red-600 rounded-full"
                        >
                          <span
                            class="px-2 py-1 font-medium text-red-600 text-xs"
                            >default</span
                          >
                        </div>
                      </div>
                      <!-- <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="ad.addressType"
                      >
                        <option selected>Set as Default Address</option>
                        <option value="DEFAULT">Default</option>
                        <option value="HOME">HOME</option>
                      </select> -->
                      <div class="absolute right-40 flex gap-x-5">
                        <button
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          data-dismiss="modal"
                          data-backdrop="false"
                          @click="opentModal('editAddress', ad)"
                          class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-slate-600 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                        >
                          Edit
                        </button>
                        <button
                          @click="HandleDelete(ad)"
                          class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-red-600 hover:ring-red-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                        >
                          Delete
                        </button>
                      </div>
                      <modal
                        v-if="modalType == 'editAddress'"
                        @close="modalType == null"
                        data-target="#myModal"
                      >
                        <template v-slot:title>
                          <div class="flex items-center text-lg font-semibold">
                            Edit Address
                          </div>
                        </template>
                        <template v-slot:body>
                          <div class="row mb-6">
                            <label class="col-lg-4 col-form-label fw-medium"
                              >Stress</label
                            >
                            <div class="col-lg-8">
                              <input
                                v-model="ad.street"
                                type="text"
                                class="form-control border-none bg-neutral-100"
                                id="firstname"
                                aria-describedby="firstnameHelp"
                              />
                            </div>
                          </div>
                          <div class="row mb-6">
                            <label class="col-lg-4 col-form-label fw-medium"
                              >Ward</label
                            >
                            <div class="col-lg-8">
                              <input
                                v-model="ad.ward"
                                type="text"
                                class="form-control border-none bg-neutral-100"
                                id="firstname"
                                aria-describedby="firstnameHelp"
                              />
                            </div>
                          </div>
                          <div class="row mb-6">
                            <label class="col-lg-4 col-form-label fw-medium"
                              >District</label
                            >
                            <div class="col-lg-8">
                              <input
                                v-model="ad.district"
                                type="text"
                                class="form-control border-none bg-neutral-100"
                                id="firstname"
                                aria-describedby="firstnameHelp"
                              />
                            </div>
                          </div>
                          <div class="row mb-6">
                            <label class="col-lg-4 col-form-label fw-medium"
                              >Province</label
                            >
                            <div class="col-lg-8">
                              <input
                                v-model="ad.provine"
                                type="text"
                                class="form-control border-none bg-neutral-100"
                                id="firstname"
                                aria-describedby="firstnameHelp"
                              />
                            </div>
                          </div>
                          <!-- <div class="form-check py-2">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                              v-model="ad.type"
                            />
                            <label
                              class="form-check-label text-zinc-950 font-medium text-sm opacity-80"
                              for="flexCheckChecked"
                            >
                              Set as Default Address
                            </label>
                          </div> -->
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            v-model="ad.type"
                          >
                            <option selected>Set as Default Address</option>
                            <option value="DEFAULT">Default</option>
                            <option value="HOME">HOME</option>
                          </select>
                        </template>
                        <template v-slot:footer
                          ><div class="bg-yellow-900 rounded-md">
                            <span
                              type="button"
                              class="btn text-white"
                              @click.prevent="HandleUpdate(ad)"
                            >
                              Update
                            </span>
                          </div></template
                        >
                      </modal>
                    </div>
                  </div>
                </div>
                <div class="form bg-white mt-10">
                  <h1
                    class="py-3 font-semibold text-base pl-10 text-yellow-950"
                  >
                    Add Address
                  </h1>
                  <div
                    class="border-dotted border-1 border-indigo-gray opacity-20"
                  ></div>
                  <div class="mx-10 my-10">
                    <form @submit.prevent="HandleAddAddress">
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Stress</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="street"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Ward</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="ward"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >District</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="district"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Province</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="province"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div
                        class="border-solid border border-indigo-black opacity-30"
                      ></div>
                      <!-- <div class="form-check py-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                          v-model="type"
                        />

                        <label
                          class="form-check-label text-zinc-950 font-medium text-sm opacity-80"
                          for="flexCheckChecked"
                        >
                          Set as Default Address
                        </label>
                      </div> -->
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="type"
                      >
                        <option selected>Set as Default Address</option>
                        <option value="DEFAULT">Default</option>
                        <option value="HOME">HOME</option>
                      </select>
                      <div class="my-1 pb-16">
                        <button
                          type="submit"
                          class="btn my-2 float-right transition duration-700 ease-in-out hover:ring-offset-2 hover:ring-2 hover:ring-zinc-400 font-medium"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="order">
                <div class="">
                  <div class="group-tabs ml-2">
                    <!-- Nav tabs -->
                    <div class="nav-order">
                      <ul
                        class="nav nav-pills bg-white flex- gap-x-48 pl-20 py-3 text-base font-medium"
                        role="tablist"
                      >
                        <li role="presentation" class="active">
                          <a
                            href="#all"
                            aria-controls="all"
                            role="tab"
                            data-toggle="tab"
                            >All</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#transport"
                            aria-controls="transport"
                            role="tab"
                            data-toggle="tab"
                            >In Transport</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#completed"
                            aria-controls="completed"
                            role="tab"
                            data-toggle="tab"
                            >Completed</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#cancel"
                            aria-controls="cancel"
                            role="tab"
                            data-toggle="tab"
                            >Cancel</a
                          >
                        </li>
                      </ul>
                    </div>

                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div role="tabpanel" class="tab-pane active" id="all">
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 234</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves_11.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Transport
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>

                                                              <p
                                                                class="font-weight-bold mb-0"
                                                              >
                                                                Thanks for
                                                                shopping with
                                                                us!
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3">
                                <div
                                  class="bg-yellow-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Transpost
                                </div>
                                <div
                                  class="bg-lime-700 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Completed
                                </div>
                                <div
                                  class="bg-red-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 567</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_complete"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_complete"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Compeleted
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <div
                                                                class="py-2 flex"
                                                              >
                                                                <span
                                                                  class="d-block pr-3 text-lime-600"
                                                                  >Cancel Date:
                                                                </span>
                                                                <span
                                                                  >12
                                                                  Jan,2018</span
                                                                >
                                                              </div>
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>

                                                              <p
                                                                class="font-weight-bold mb-0"
                                                              >
                                                                Thanks for
                                                                shopping with
                                                                us!
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3">
                                <div
                                  class="bg-yellow-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Transpost
                                </div>
                                <div
                                  class="bg-lime-700 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Completed
                                </div>
                                <div
                                  class="bg-red-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 789</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves_12.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_cancel"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_cancel"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Cancel
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <div
                                                                class="py-2 flex"
                                                              >
                                                                <span
                                                                  class="d-block pr-3 text-red-500"
                                                                  >Cancel Date:
                                                                </span>
                                                                <span
                                                                  >12
                                                                  Jan,2018</span
                                                                >
                                                              </div>
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3">
                                <div
                                  class="bg-yellow-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Transpost
                                </div>
                                <div
                                  class="bg-lime-700 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Completed
                                </div>
                                <div
                                  class="bg-red-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="transport">
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 123</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_transform"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_transform"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <section class="vh-100">
                                                    <div class="h-100">
                                                      <div
                                                        class="row d-flex justify-content-center h-100"
                                                      >
                                                        <div class="col">
                                                          <div
                                                            class="card card-stepper"
                                                            style="
                                                              border-radius: 10px;
                                                            "
                                                          >
                                                            <div
                                                              class="card-body p-4"
                                                            >
                                                              <div
                                                                class="d-flex justify-content-between align-items-center"
                                                              >
                                                                <div
                                                                  class="d-flex flex-column"
                                                                >
                                                                  <span
                                                                    class="lead fw-normal text-base"
                                                                    >Your order
                                                                    has been
                                                                    delivered</span
                                                                  >
                                                                  <span
                                                                    class="text-muted small"
                                                                    >on 21 Jan,
                                                                    2023</span
                                                                  >
                                                                </div>
                                                              </div>
                                                              <hr
                                                                class="my-4"
                                                              />
                                                              <div
                                                                class="bg-white rounded-md text-sm"
                                                              >
                                                                <span
                                                                  class="text-red-600"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot"
                                                                  ></i>
                                                                  Address</span
                                                                >
                                                                <br />
                                                                <div
                                                                  class="py-2 flex gap-x-4"
                                                                >
                                                                  <span
                                                                    class="font-semibold"
                                                                    >Luu Thi
                                                                    Minh -
                                                                    0398677620
                                                                  </span>
                                                                  <span
                                                                    >Quang
                                                                    Hung-Phu
                                                                    Cu-Hung
                                                                    Yen</span
                                                                  >
                                                                  <div
                                                                    class="border-solid border-1 border-red-500 text-red-500 px-1 py-2 text-sm"
                                                                  >
                                                                    <span
                                                                      >Default</span
                                                                    >
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div
                                                                class="d-flex flex-row justify-content-between align-items-center align-content-center"
                                                              >
                                                                <span
                                                                  class="dot"
                                                                ></span>
                                                                <hr
                                                                  class="flex-fill track-line"
                                                                />
                                                                <span
                                                                  class="dot"
                                                                ></span>
                                                                <hr
                                                                  class="flex-fill track-line"
                                                                />
                                                                <span
                                                                  class="dot"
                                                                ></span>
                                                                <hr
                                                                  class="flex-fill track-line"
                                                                />
                                                                <span
                                                                  class="dot"
                                                                ></span>
                                                                <hr
                                                                  class="flex-fill track-line"
                                                                />
                                                                <span
                                                                  class="d-flex justify-content-center align-items-center big-dot dot"
                                                                >
                                                                  <i
                                                                    class="fa fa-check text-white"
                                                                  ></i
                                                                ></span>
                                                              </div>

                                                              <div
                                                                class="d-flex flex-row justify-content-between align-items-center text-sm"
                                                              >
                                                                <div
                                                                  class="d-flex flex-column align-items-start"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Order
                                                                    placed</span
                                                                  >
                                                                </div>
                                                                <div
                                                                  class="d-flex flex-column justify-content-center"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Order
                                                                    placed</span
                                                                  >
                                                                </div>
                                                                <div
                                                                  class="d-flex flex-column justify-content-center align-items-center"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Order
                                                                    Dispatched</span
                                                                  >
                                                                </div>
                                                                <div
                                                                  class="d-flex flex-column align-items-center"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Out for
                                                                    delivery</span
                                                                  >
                                                                </div>
                                                                <div
                                                                  class="d-flex flex-column align-items-end"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Delivered</span
                                                                  >
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                  <div
                                                    class="product_transport"
                                                  >
                                                    <div
                                                      class="bg-white rounded-md px-1"
                                                    >
                                                      <div>
                                                        <div class="card mb-3">
                                                          <div
                                                            class="card-body"
                                                          >
                                                            <div
                                                              class="d-flex justify-content-between"
                                                            >
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div>
                                                                  <img
                                                                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                    class="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style="
                                                                      width: 65px;
                                                                    "
                                                                  />
                                                                </div>
                                                                <div
                                                                  class="ms-3"
                                                                >
                                                                  <h5>
                                                                    Sofa 1
                                                                  </h5>
                                                                  <p
                                                                    class="small mb-0"
                                                                  >
                                                                    14 x 16m,
                                                                    Yellow
                                                                  </p>
                                                                </div>
                                                              </div>
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div
                                                                  style="
                                                                    width: 50px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="fw-normal mb-0"
                                                                  >
                                                                    2
                                                                  </h5>
                                                                </div>
                                                                <div
                                                                  style="
                                                                    width: 80px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="mb-0"
                                                                  >
                                                                    $900
                                                                  </h5>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="card mb-3">
                                                          <div
                                                            class="card-body"
                                                          >
                                                            <div
                                                              class="d-flex justify-content-between"
                                                            >
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div>
                                                                  <img
                                                                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                    class="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style="
                                                                      width: 65px;
                                                                    "
                                                                  />
                                                                </div>
                                                                <div
                                                                  class="ms-3"
                                                                >
                                                                  <h5>
                                                                    Sofa 1
                                                                  </h5>
                                                                  <p
                                                                    class="small mb-0"
                                                                  >
                                                                    14 x 16m,
                                                                    Yellow
                                                                  </p>
                                                                </div>
                                                              </div>
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div
                                                                  style="
                                                                    width: 50px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="fw-normal mb-0"
                                                                  >
                                                                    2
                                                                  </h5>
                                                                </div>
                                                                <div
                                                                  style="
                                                                    width: 80px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="mb-0"
                                                                  >
                                                                    $900
                                                                  </h5>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="card mb-3">
                                                          <div
                                                            class="card-body"
                                                          >
                                                            <div
                                                              class="d-flex justify-content-between"
                                                            >
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div>
                                                                  <img
                                                                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                    class="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style="
                                                                      width: 65px;
                                                                    "
                                                                  />
                                                                </div>
                                                                <div
                                                                  class="ms-3"
                                                                >
                                                                  <h5>
                                                                    Sofa 1
                                                                  </h5>
                                                                  <p
                                                                    class="small mb-0"
                                                                  >
                                                                    14 x 16m,
                                                                    Yellow
                                                                  </p>
                                                                </div>
                                                              </div>
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div
                                                                  style="
                                                                    width: 50px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="fw-normal mb-0"
                                                                  >
                                                                    2
                                                                  </h5>
                                                                </div>
                                                                <div
                                                                  style="
                                                                    width: 80px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="mb-0"
                                                                  >
                                                                    $900
                                                                  </h5>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="pt-3">
                                                          <div class="">
                                                            <table
                                                              class="table table-borderless text-base"
                                                            >
                                                              <tbody
                                                                class="totals"
                                                              >
                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="text-muted"
                                                                        >Subtotal</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="text-right"
                                                                    >
                                                                      <span
                                                                        >$168.50</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                </tr>

                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="text-muted"
                                                                        >Shipping
                                                                        Fee</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="text-right"
                                                                    >
                                                                      <span
                                                                        >$22</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                </tr>

                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="text-muted"
                                                                        >Payment
                                                                        Method</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="ml-10"
                                                                    >
                                                                      <img
                                                                        src="@/assets/images/vnp.png"
                                                                        class="w-2/12 float-right"
                                                                      />
                                                                    </div>
                                                                  </td>
                                                                </tr>

                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="text-muted"
                                                                        >Discount</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="text-right"
                                                                    >
                                                                      <span
                                                                        class="text-success"
                                                                        >$168.50</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                </tr>

                                                                <tr
                                                                  class="border-top border-bottom"
                                                                >
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="font-weight-bold"
                                                                        >Subtotal</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="text-right"
                                                                    >
                                                                      <span
                                                                        class="font-weight-bold"
                                                                        >$238.50</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="completed">
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 567</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/clock/clock_1.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_complete"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_complete"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Compeleted
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <div
                                                                class="py-2 flex"
                                                              >
                                                                <span
                                                                  class="d-block pr-3 text-lime-600"
                                                                  >Cancel Date:
                                                                </span>
                                                                <span
                                                                  >12
                                                                  Jan,2018</span
                                                                >
                                                              </div>
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>

                                                              <p
                                                                class="font-weight-bold mb-0"
                                                              >
                                                                Thanks for
                                                                shopping with
                                                                us!
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="cancel">
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 789</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves_12.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_cancel"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_cancel"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Cancel
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <div
                                                                class="py-2 flex"
                                                              >
                                                                <span
                                                                  class="d-block pr-3 text-red-500"
                                                                  >Cancel Date:
                                                                </span>
                                                                <span
                                                                  >12
                                                                  Jan,2018</span
                                                                >
                                                              </div>
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="wishlist">
                <div>
                  <nav class="bg-white px-3 py-3">
                    <ul class="category nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"
                          >Sofa</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Clock</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Altar</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Bed</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Wardrobe</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Shelves TV</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="grid grid-cols-4 gap-x-4 px-3">
                  <div
                    class="product px-2 py-2 border border-indigo-100 rounded-md"
                  >
                    <div class="image_product">
                      <router-link to="/detailfurniture">
                        <img
                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                          alt=""
                        />
                      </router-link>
                      <div class="product_label bg-yellow-600">
                        <span class="text-white">New</span>
                      </div>
                    </div>
                    <div class="pt-4 px-2">
                      <div class="text-xs">
                        <span class="text-gray-800 pr-2">$1500</span>
                        <del class="text-gray-500">$2000</del>
                      </div>
                      <div class="pt-2 text-base font-semibold">
                        <span>Name Product</span>
                      </div>
                      <div>
                        <span class="text-gray-600 text-xs">Description</span>
                      </div>
                      <div>
                        <span class="text-sm"
                          >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm">Quantity: 3</span>
                      </div>
                      <div class="button_buy py-3 px-2">
                        <router-link to="/orderbill">
                          <button
                            class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                          >
                            Buy now
                          </button>
                        </router-link>
                      </div>
                      <div class="flex flex-cols-2 gap-x-4 text-xs">
                        <div><i class="fa-regular fa-heart"></i></div>
                        <div class="">
                          <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="product px-2 py-2 border border-indigo-100 rounded-md"
                  >
                    <div class="image_product">
                      <router-link to="/detailfurniture">
                        <img
                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                          alt=""
                        />
                      </router-link>
                      <div class="product_label bg-yellow-600">
                        <span class="text-white">New</span>
                      </div>
                    </div>
                    <div class="pt-4">
                      <div class="text-xs">
                        <span class="text-gray-800 pr-2">$1500</span>
                        <del class="text-gray-500">$2000</del>
                      </div>
                      <div class="pt-2 text-base font-semibold">
                        <span>Name Product</span>
                      </div>
                      <div>
                        <span class="text-gray-600 text-xs">Description</span>
                      </div>
                      <div>
                        <span class="text-sm"
                          >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm">Quantity: 3</span>
                      </div>
                      <div class="button_buy py-3 px-2">
                        <button
                          class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                        >
                          Buy now
                        </button>
                      </div>
                      <div class="flex flex-cols-2 gap-x-4 text-xs">
                        <div><i class="fa-regular fa-heart"></i></div>
                        <div class="">
                          <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="product px-2 py-2 border border-indigo-100 rounded-md"
                  >
                    <div class="image_product">
                      <router-link to="/detailfurniture">
                        <img
                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                          alt=""
                        />
                      </router-link>
                      <div class="product_label bg-yellow-600">
                        <span class="text-white">New</span>
                      </div>
                    </div>
                    <div class="pt-4">
                      <div class="text-xs">
                        <span class="text-gray-800 pr-2">$1500</span>
                        <del class="text-gray-500">$2000</del>
                      </div>
                      <div class="pt-2 text-base font-semibold">
                        <span>Name Product</span>
                      </div>
                      <div>
                        <span class="text-gray-600 text-xs">Description</span>
                      </div>
                      <div>
                        <span class="text-sm"
                          >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm">Quantity: 3</span>
                      </div>
                      <div class="button_buy py-3 px-2">
                        <button
                          class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="product px-2 py-2 border border-indigo-100 rounded-md"
                  >
                    <div class="image_product">
                      <router-link to="/detailfurniture">
                        <img
                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                          alt=""
                        />
                      </router-link>
                      <div class="product_label bg-yellow-600">
                        <span class="text-white">New</span>
                      </div>
                    </div>
                    <div class="pt-4">
                      <div class="text-xs">
                        <span class="text-gray-800 pr-2">$1500</span>
                        <del class="text-gray-500">$2000</del>
                      </div>
                      <div class="pt-2 text-base font-semibold">
                        <span>Name Product</span>
                      </div>
                      <div>
                        <span class="text-gray-600 text-xs">Description</span>
                      </div>
                      <div>
                        <span class="text-sm"
                          >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm">Quantity: 3</span>
                      </div>
                      <div class="button_buy py-3 px-2">
                        <button
                          class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="grid grid-cols-4 gap-x-4 px-3">
                  <div
                    class="product px-2 py-2 border border-indigo-100 rounded-md"
                  >
                    <div class="image_product">
                      <router-link to="/detailfurniture">
                        <img
                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                          alt=""
                        />
                      </router-link>
                      <div class="product_label bg-yellow-600">
                        <span class="text-white">New</span>
                      </div>
                    </div>
                    <div class="pt-4 px-2">
                      <div class="text-xs">
                        <span class="text-gray-800 pr-2">$1500</span>
                        <del class="text-gray-500">$2000</del>
                      </div>
                      <div class="pt-2 text-base font-semibold">
                        <span>Name Product</span>
                      </div>
                      <div>
                        <span class="text-gray-600 text-xs">Description</span>
                      </div>
                      <div>
                        <span class="text-sm"
                          >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm">Quantity: 3</span>
                      </div>
                      <div class="button_buy py-3 px-2">
                        <router-link to="/orderbill">
                          <button
                            class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                          >
                            Buy now
                          </button>
                        </router-link>
                      </div>
                      <div class="flex flex-cols-2 gap-x-4 text-xs">
                        <div><i class="fa-regular fa-heart"></i></div>
                        <div class="">
                          <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="product px-2 py-2 border border-indigo-100 rounded-md"
                  >
                    <div class="image_product">
                      <router-link to="/detailfurniture">
                        <img
                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                          alt=""
                        />
                      </router-link>
                      <div class="product_label bg-yellow-600">
                        <span class="text-white">New</span>
                      </div>
                    </div>
                    <div class="pt-4">
                      <div class="text-xs">
                        <span class="text-gray-800 pr-2">$1500</span>
                        <del class="text-gray-500">$2000</del>
                      </div>
                      <div class="pt-2 text-base font-semibold">
                        <span>Name Product</span>
                      </div>
                      <div>
                        <span class="text-gray-600 text-xs">Description</span>
                      </div>
                      <div>
                        <span class="text-sm"
                          >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm">Quantity: 3</span>
                      </div>
                      <div class="button_buy py-3 px-2">
                        <button
                          class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                        >
                          Buy now
                        </button>
                      </div>
                      <div class="flex flex-cols-2 gap-x-4 text-xs">
                        <div><i class="fa-regular fa-heart"></i></div>
                        <div class="">
                          <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="product px-2 py-2 border border-indigo-100 rounded-md"
                  >
                    <div class="image_product">
                      <router-link to="/detailfurniture">
                        <img
                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                          alt=""
                        />
                      </router-link>
                      <div class="product_label bg-yellow-600">
                        <span class="text-white">New</span>
                      </div>
                    </div>
                    <div class="pt-4">
                      <div class="text-xs">
                        <span class="text-gray-800 pr-2">$1500</span>
                        <del class="text-gray-500">$2000</del>
                      </div>
                      <div class="pt-2 text-base font-semibold">
                        <span>Name Product</span>
                      </div>
                      <div>
                        <span class="text-gray-600 text-xs">Description</span>
                      </div>
                      <div>
                        <span class="text-sm"
                          >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm">Quantity: 3</span>
                      </div>
                      <div class="button_buy py-3 px-2">
                        <button
                          class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="product px-2 py-2 border border-indigo-100 rounded-md"
                  >
                    <div class="image_product">
                      <router-link to="/detailfurniture">
                        <img
                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                          alt=""
                        />
                      </router-link>
                      <div class="product_label bg-yellow-600">
                        <span class="text-white">New</span>
                      </div>
                    </div>
                    <div class="pt-4">
                      <div class="text-xs">
                        <span class="text-gray-800 pr-2">$1500</span>
                        <del class="text-gray-500">$2000</del>
                      </div>
                      <div class="pt-2 text-base font-semibold">
                        <span>Name Product</span>
                      </div>
                      <div>
                        <span class="text-gray-600 text-xs">Description</span>
                      </div>
                      <div>
                        <span class="text-sm"
                          >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm">Quantity: 3</span>
                      </div>
                      <div class="button_buy py-3 px-2">
                        <button
                          class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="warranty">
                <div class="form bg-white">
                  <div class="flex"></div>
                  <h1
                    class="py-3 font-semibold text-base pl-10 text-yellow-950"
                  >
                    Edit Information
                  </h1>
                  <div v-if="warranties.length">
                    <div
                      class="flex"
                      v-for="w in warranties"
                      :key="w.warrantyId"
                    >
                      <img :src="w.images" alt="images" />
                      <span>Reason{{ w.warrantyReason }}</span>
                      <span>Dates{{ w.estimatedTime }}</span>
                    </div>
                  </div>
                </div>
                <!-- <div class="nav-warranty">
                  <ul
                    class="nav nav-pills bg-white flex- gap-x-60 pl-20 py-3 text-base font-medium"
                    role="tablist"
                  >
                    <li role="presentation" class="active">
                      <a
                        href="#alllWarranty"
                        aria-controls="allWarranty"
                        role="tab"
                        data-toggle="tab"
                        >List Warranty</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        href="#addWarranty"
                        aria-controls="addWarranty"
                        role="tab"
                        data-toggle="tab"
                        >Create Warranty</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        href="#updateWarranty"
                        aria-controls="completed"
                        role="tab"
                        data-toggle="tab"
                        >Update Warranty</a
                      >
                    </li>
                  </ul>
                </div> -->

                <!-- Tab panes -->
                <!-- <div class="tab-content">
                  <div
                    role="tabpanel"
                    class="tab-pane active"
                    id="alllWarranty"
                  ></div>
                  <div role="tabpanel" class="tab-pane active" id="addWarranty">
                    <div class="mt-10">
                      <span class="mx-28 font-medium">Create Warranty</span>
                    </div>
                    <hr class="mx-28 w-1/12" />
                    <div
                      class="grid grid-cols-2 bg-white drop-shadow rounded-lg mx-28 my-3 max-md:mx-4"
                    >
                      <div class="border border-red-100 px-6 py-3 text-sm">
                        <form>
                          <div>
                            <div class="form-group">
                              <label for="exampleFormControlInput1"
                                >Order ID</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="1.."
                              />
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlInput1"
                                >Describe the reason</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="This is reason..."
                              />
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlInput1"
                                >Estimated Time</label
                              >
                              <input
                                type="date"
                                class="form-control"
                                id="exampleFormControlInput1"
                              />
                            </div>
                          </div>
                          <div class="button_w float-right rounded-md my-2">
                            <button type="submit" class="btn text-white">
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="img w-6/12">
                        <img
                          src="@/assets/images/guarantee.png"
                          alt="customize"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    class="tab-pane active"
                    id="updateWarranty"
                  ></div>
                </div> -->
                <div class="bg-white form"></div>
              </div>
              <div role="tabpanel" class="tab-pane active" id="customize">
                <div class="">
                  <div class="group-tabs ml-2">
                    <!-- Nav tabs -->
                    <div class="nav-order">
                      <ul
                        class="nav nav-pills bg-white flex- gap-x-48 pl-20 py-3 text-base font-medium"
                        role="tablist"
                      >
                        <li role="presentation" class="active">
                          <a
                            href="#all"
                            aria-controls="all"
                            role="tab"
                            data-toggle="tab"
                            >All</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#transport"
                            aria-controls="transport"
                            role="tab"
                            data-toggle="tab"
                            >In Transport</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#completed"
                            aria-controls="completed"
                            role="tab"
                            data-toggle="tab"
                            >Completed</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#cancel"
                            aria-controls="cancel"
                            role="tab"
                            data-toggle="tab"
                            >Cancel</a
                          >
                        </li>
                      </ul>
                    </div>

                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div role="tabpanel" class="tab-pane active" id="all">
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID: {{}}</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves_11.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Transport
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>

                                                              <p
                                                                class="font-weight-bold mb-0"
                                                              >
                                                                Thanks for
                                                                shopping with
                                                                us!
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3">
                                <div
                                  class="bg-yellow-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Transpost
                                </div>
                                <div
                                  class="bg-lime-700 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Completed
                                </div>
                                <div
                                  class="bg-red-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 567</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_complete"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_complete"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Compeleted
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <div
                                                                class="py-2 flex"
                                                              >
                                                                <span
                                                                  class="d-block pr-3 text-lime-600"
                                                                  >Cancel Date:
                                                                </span>
                                                                <span
                                                                  >12
                                                                  Jan,2018</span
                                                                >
                                                              </div>
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>

                                                              <p
                                                                class="font-weight-bold mb-0"
                                                              >
                                                                Thanks for
                                                                shopping with
                                                                us!
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3">
                                <div
                                  class="bg-yellow-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Transpost
                                </div>
                                <div
                                  class="bg-lime-700 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Completed
                                </div>
                                <div
                                  class="bg-red-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 789</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves_12.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_cancel"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_cancel"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Cancel
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <div
                                                                class="py-2 flex"
                                                              >
                                                                <span
                                                                  class="d-block pr-3 text-red-500"
                                                                  >Cancel Date:
                                                                </span>
                                                                <span
                                                                  >12
                                                                  Jan,2018</span
                                                                >
                                                              </div>
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3">
                                <div
                                  class="bg-yellow-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Transpost
                                </div>
                                <div
                                  class="bg-lime-700 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Completed
                                </div>
                                <div
                                  class="bg-red-600 px-2 py-2 text-white rounded-md text-sm"
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="transport">
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 123</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_transform"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_transform"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <section class="vh-100">
                                                    <div class="h-100">
                                                      <div
                                                        class="row d-flex justify-content-center h-100"
                                                      >
                                                        <div class="col">
                                                          <div
                                                            class="card card-stepper"
                                                            style="
                                                              border-radius: 10px;
                                                            "
                                                          >
                                                            <div
                                                              class="card-body p-4"
                                                            >
                                                              <div
                                                                class="d-flex justify-content-between align-items-center"
                                                              >
                                                                <div
                                                                  class="d-flex flex-column"
                                                                >
                                                                  <span
                                                                    class="lead fw-normal text-base"
                                                                    >Your order
                                                                    has been
                                                                    delivered</span
                                                                  >
                                                                  <span
                                                                    class="text-muted small"
                                                                    >on 21 Jan,
                                                                    2023</span
                                                                  >
                                                                </div>
                                                              </div>
                                                              <hr
                                                                class="my-4"
                                                              />
                                                              <div
                                                                class="bg-white rounded-md text-sm"
                                                              >
                                                                <span
                                                                  class="text-red-600"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot"
                                                                  ></i>
                                                                  Address</span
                                                                >
                                                                <br />
                                                                <div
                                                                  class="py-2 flex gap-x-4"
                                                                >
                                                                  <span
                                                                    class="font-semibold"
                                                                    >Luu Thi
                                                                    Minh -
                                                                    0398677620
                                                                  </span>
                                                                  <span
                                                                    >Quang
                                                                    Hung-Phu
                                                                    Cu-Hung
                                                                    Yen</span
                                                                  >
                                                                  <div
                                                                    class="border-solid border-1 border-red-500 text-red-500 px-1 py-2 text-sm"
                                                                  >
                                                                    <span
                                                                      >Default</span
                                                                    >
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div
                                                                class="d-flex flex-row justify-content-between align-items-center align-content-center"
                                                              >
                                                                <span
                                                                  class="dot"
                                                                ></span>
                                                                <hr
                                                                  class="flex-fill track-line"
                                                                />
                                                                <span
                                                                  class="dot"
                                                                ></span>
                                                                <hr
                                                                  class="flex-fill track-line"
                                                                />
                                                                <span
                                                                  class="dot"
                                                                ></span>
                                                                <hr
                                                                  class="flex-fill track-line"
                                                                />
                                                                <span
                                                                  class="dot"
                                                                ></span>
                                                                <hr
                                                                  class="flex-fill track-line"
                                                                />
                                                                <span
                                                                  class="d-flex justify-content-center align-items-center big-dot dot"
                                                                >
                                                                  <i
                                                                    class="fa fa-check text-white"
                                                                  ></i
                                                                ></span>
                                                              </div>

                                                              <div
                                                                class="d-flex flex-row justify-content-between align-items-center text-sm"
                                                              >
                                                                <div
                                                                  class="d-flex flex-column align-items-start"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Order
                                                                    placed</span
                                                                  >
                                                                </div>
                                                                <div
                                                                  class="d-flex flex-column justify-content-center"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Order
                                                                    placed</span
                                                                  >
                                                                </div>
                                                                <div
                                                                  class="d-flex flex-column justify-content-center align-items-center"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Order
                                                                    Dispatched</span
                                                                  >
                                                                </div>
                                                                <div
                                                                  class="d-flex flex-column align-items-center"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Out for
                                                                    delivery</span
                                                                  >
                                                                </div>
                                                                <div
                                                                  class="d-flex flex-column align-items-end"
                                                                >
                                                                  <span
                                                                    >15
                                                                    Mar</span
                                                                  ><span
                                                                    >Delivered</span
                                                                  >
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                  <div
                                                    class="product_transport"
                                                  >
                                                    <div
                                                      class="bg-white rounded-md px-1"
                                                    >
                                                      <div>
                                                        <div class="card mb-3">
                                                          <div
                                                            class="card-body"
                                                          >
                                                            <div
                                                              class="d-flex justify-content-between"
                                                            >
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div>
                                                                  <img
                                                                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                    class="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style="
                                                                      width: 65px;
                                                                    "
                                                                  />
                                                                </div>
                                                                <div
                                                                  class="ms-3"
                                                                >
                                                                  <h5>
                                                                    Sofa 1
                                                                  </h5>
                                                                  <p
                                                                    class="small mb-0"
                                                                  >
                                                                    14 x 16m,
                                                                    Yellow
                                                                  </p>
                                                                </div>
                                                              </div>
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div
                                                                  style="
                                                                    width: 50px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="fw-normal mb-0"
                                                                  >
                                                                    2
                                                                  </h5>
                                                                </div>
                                                                <div
                                                                  style="
                                                                    width: 80px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="mb-0"
                                                                  >
                                                                    $900
                                                                  </h5>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="card mb-3">
                                                          <div
                                                            class="card-body"
                                                          >
                                                            <div
                                                              class="d-flex justify-content-between"
                                                            >
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div>
                                                                  <img
                                                                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                    class="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style="
                                                                      width: 65px;
                                                                    "
                                                                  />
                                                                </div>
                                                                <div
                                                                  class="ms-3"
                                                                >
                                                                  <h5>
                                                                    Sofa 1
                                                                  </h5>
                                                                  <p
                                                                    class="small mb-0"
                                                                  >
                                                                    14 x 16m,
                                                                    Yellow
                                                                  </p>
                                                                </div>
                                                              </div>
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div
                                                                  style="
                                                                    width: 50px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="fw-normal mb-0"
                                                                  >
                                                                    2
                                                                  </h5>
                                                                </div>
                                                                <div
                                                                  style="
                                                                    width: 80px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="mb-0"
                                                                  >
                                                                    $900
                                                                  </h5>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="card mb-3">
                                                          <div
                                                            class="card-body"
                                                          >
                                                            <div
                                                              class="d-flex justify-content-between"
                                                            >
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div>
                                                                  <img
                                                                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                    class="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style="
                                                                      width: 65px;
                                                                    "
                                                                  />
                                                                </div>
                                                                <div
                                                                  class="ms-3"
                                                                >
                                                                  <h5>
                                                                    Sofa 1
                                                                  </h5>
                                                                  <p
                                                                    class="small mb-0"
                                                                  >
                                                                    14 x 16m,
                                                                    Yellow
                                                                  </p>
                                                                </div>
                                                              </div>
                                                              <div
                                                                class="d-flex flex-row align-items-center"
                                                              >
                                                                <div
                                                                  style="
                                                                    width: 50px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="fw-normal mb-0"
                                                                  >
                                                                    2
                                                                  </h5>
                                                                </div>
                                                                <div
                                                                  style="
                                                                    width: 80px;
                                                                  "
                                                                >
                                                                  <h5
                                                                    class="mb-0"
                                                                  >
                                                                    $900
                                                                  </h5>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="pt-3">
                                                          <div class="">
                                                            <table
                                                              class="table table-borderless text-base"
                                                            >
                                                              <tbody
                                                                class="totals"
                                                              >
                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="text-muted"
                                                                        >Subtotal</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="text-right"
                                                                    >
                                                                      <span
                                                                        >$168.50</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                </tr>

                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="text-muted"
                                                                        >Shipping
                                                                        Fee</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="text-right"
                                                                    >
                                                                      <span
                                                                        >$22</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                </tr>

                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="text-muted"
                                                                        >Payment
                                                                        Method</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="ml-10"
                                                                    >
                                                                      <img
                                                                        src="@/assets/images/vnp.png"
                                                                        class="w-2/12 float-right"
                                                                      />
                                                                    </div>
                                                                  </td>
                                                                </tr>

                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="text-muted"
                                                                        >Discount</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="text-right"
                                                                    >
                                                                      <span
                                                                        class="text-success"
                                                                        >$168.50</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                </tr>

                                                                <tr
                                                                  class="border-top border-bottom"
                                                                >
                                                                  <td>
                                                                    <div
                                                                      class="text-left"
                                                                    >
                                                                      <span
                                                                        class="font-weight-bold"
                                                                        >Subtotal</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                  <td>
                                                                    <div
                                                                      class="text-right"
                                                                    >
                                                                      <span
                                                                        class="font-weight-bold"
                                                                        >$238.50</span
                                                                      >
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="completed">
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 567</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/clock/clock_1.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_complete"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_complete"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Compeleted
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <div
                                                                class="py-2 flex"
                                                              >
                                                                <span
                                                                  class="d-block pr-3 text-lime-600"
                                                                  >Cancel Date:
                                                                </span>
                                                                <span
                                                                  >12
                                                                  Jan,2018</span
                                                                >
                                                              </div>
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>

                                                              <p
                                                                class="font-weight-bold mb-0"
                                                              >
                                                                Thanks for
                                                                shopping with
                                                                us!
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="cancel">
                        <div class="">
                          <div clas="product">
                            <div class="ibox-content mt-3 rounded-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div>ID Order: 789</div>
                                <div class="date_order">Date: 9/5/2023</div>
                              </div>
                              <hr class="my-3" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td width="90">
                                        <div class="cart-product-imitation">
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves_12.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3>
                                          <a href="#" class="text-navy">
                                            Solid 2m4 red oak wood TV shelf
                                          </a>
                                        </h3>
                                        <p class="small">
                                          It is a long established fact that a
                                          reader will be distracted by the
                                          readable content of a page when
                                          looking at its layout. The point of
                                          using Lorem Ipsum is
                                        </p>
                                        <dl class="small m-b-none">
                                          <dt>Description lists</dt>
                                          <dd>
                                            A description list is perfect for
                                            defining terms.
                                          </dd>
                                        </dl>

                                        <div class="m-t-sm">
                                          <div
                                            href="#"
                                            class="text-muted cursor-pointer"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_cancel"
                                          >
                                            <i
                                              class="fa-solid fa-circle-info"
                                            ></i>
                                            Detail
                                          </div>
                                          <!-- Modal -->
                                          <div
                                            class="modal fade"
                                            id="exampleModal_cancel"
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div
                                              class="modal-dialog modal-dialog-centered"
                                            >
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5
                                                    class="modal-title font-medium"
                                                    id="exampleModalLabel"
                                                  >
                                                    Detail Order Cancel
                                                  </h5>
                                                  <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                                <div class="modal-body">
                                                  <div class="">
                                                    <div class="container mb-3">
                                                      <div
                                                        class="row d-flex justify-content-center"
                                                      >
                                                        <div class="">
                                                          <div class="card">
                                                            <div
                                                              class="invoice"
                                                            >
                                                              <div
                                                                class="py-2 flex"
                                                              >
                                                                <span
                                                                  class="d-block pr-3 text-red-500"
                                                                  >Cancel Date:
                                                                </span>
                                                                <span
                                                                  >12
                                                                  Jan,2018</span
                                                                >
                                                              </div>
                                                              <span
                                                                class="font-weight-bold d-block mt-4"
                                                                >Infromation</span
                                                              >
                                                              <div class="py-2">
                                                                <span
                                                                  class="d-inlineblock pr-3 text-red-500"
                                                                  ><i
                                                                    class="fa-solid fa-location-dot pr-1"
                                                                  ></i>
                                                                  Shiping
                                                                  Address:</span
                                                                >
                                                                <span
                                                                  >12 Me Tri- Ha
                                                                  Noi</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            Date</span
                                                                          >
                                                                          <span
                                                                            >12
                                                                            Jan,2018</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Order
                                                                            No</span
                                                                          >
                                                                          <span
                                                                            >O1233</span
                                                                          >
                                                                        </div>
                                                                      </td>

                                                                      <td>
                                                                        <div
                                                                          class="py-2"
                                                                        >
                                                                          <span
                                                                            class="d-block text-muted"
                                                                            >Payment</span
                                                                          >
                                                                          <span
                                                                            ><img
                                                                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                                              width="20"
                                                                          /></span>
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="product border-bottom table-responsive"
                                                              >
                                                                <table
                                                                  class="table table-borderless"
                                                                >
                                                                  <tbody>
                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                                          width="90"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          1</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Dark</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$67.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>

                                                                    <tr>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <img
                                                                          src="@/assets/images/category/shelves_tv/shelves.png"
                                                                          width="70"
                                                                        />
                                                                      </td>

                                                                      <td
                                                                        width="60%"
                                                                      >
                                                                        <span
                                                                          class="font-weight-bold"
                                                                          >Sofa
                                                                          2</span
                                                                        >
                                                                        <div
                                                                          class="product-qty"
                                                                        >
                                                                          <span
                                                                            class="d-block"
                                                                            >Quantity:1</span
                                                                          >
                                                                          <span
                                                                            >Color:Orange</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                      <td
                                                                        width="20%"
                                                                      >
                                                                        <div
                                                                          class="text-right"
                                                                        >
                                                                          <span
                                                                            class="font-weight-bold"
                                                                            >$77.50</span
                                                                          >
                                                                        </div>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </div>

                                                              <div
                                                                class="row d-flex justify-content-end"
                                                              >
                                                                <div
                                                                  class="col-md-5"
                                                                >
                                                                  <table
                                                                    class="table table-borderless"
                                                                  >
                                                                    <tbody
                                                                      class="totals"
                                                                    >
                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Shipping
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$22</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Tax
                                                                              Fee</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              >$7.65</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr>
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="text-muted"
                                                                              >Discount</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="text-success"
                                                                              >$168.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>

                                                                      <tr
                                                                        class="border-top border-bottom"
                                                                      >
                                                                        <td>
                                                                          <div
                                                                            class="text-left"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >Subtotal</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                        <td>
                                                                          <div
                                                                            class="text-right"
                                                                          >
                                                                            <span
                                                                              class="font-weight-bold"
                                                                              >$238.50</span
                                                                            >
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <div
                                                    class="bg-gray-600 rounded-md"
                                                  >
                                                    <button
                                                      type="button"
                                                      class="btn text-white"
                                                      data-bs-dismiss="modal"
                                                    >
                                                      Close
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        $180,00
                                        <s class="small text-muted">$230,00</s>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        1
                                      </td>
                                      <td>
                                        <h4>$180,00</h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr class="my-3" />
                              <div class="float-right flex gap-x-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- <div v-if="!customer / customer - infor">
    <div class="pt-24 px-40">
      <h1>You are not logged in!</h1>
      <img src="@/assets/images/error.png" />
    </div>
  </div> -->
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
      info: {},
      orderAll: [],
      orderPending: [],
      orderDeliveried: [],
      wishlist: [],
      warranties: [],
      customizeOder: [],
      modalType: null,
      status: "",
      phoneNumber: "",
      isEditPhone: false,
      isSuccess: false,
      isAlertSuccess: false,
      isAlertError: false,
      isAlertWanning: false,
      messageError: null,
      messageSuccess: null,
      messageWanning: null,
      otp: "",
      address: [],
      url: "",
      updateInfo: {},
      nameFile: {},
      file: "",
      DoB: "",
      statusOrder: "",
      avatar: [],
      type: "",
    };
  },
  created() {
    this.getOrderAll();
    this.getOrderPending();
    this.getOrderDeliveried();
    this.getInfor();
    this.getAddress();
    this.getWishList();
    this.getWarranties();
    this.getCustomizeOrder();
  },
  methods: {
    async getOrderAll() {
      try {
        const response = await axios.get("customer/get-order?status=All");
        this.orderAll = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getOrderPending() {
      try {
        const response = await axios.get("customer/get-order?status=Pending");
        this.orderPending = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getOrderDeliveried() {
      try {
        const response = await axios.get(
          "customer/get-order?status=Deliveried"
        );
        this.orderDeliveried = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getInfor() {
      try {
        const response = await axios.get("user/detail");
        this.info = response.data;
        const dob = new Date(this.info.doB);
        this.DoB = dob.toISOString().split("T")[0];
        const a = this.info.avatar;
        const url = a.replace(/\\/g, "/");
        this.avatar = url;
        this.isEditPhone = true;
      } catch (error) {
        console.error(error);
      }
    },
    async getCustomizeOrder() {
      try {
        const response = await axios.get(
          "customer/customize-furnitures?status=All"
        );
        this.customizeOrder = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async opentModal(type) {
      this.modalType = type;
    },
    closeModal() {
      this.modalType = null;
      this.isShowModalOtp = false;
    },
    cancelEditing() {
      this.isEditPhone = false;
    },
    async getWarranties() {
      try {
        const response = await axios.get("customer/warranties");
        this.wishlist = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    opentModalCF(t) {
      this.type = t;
      this.confirmNumberPhone();
      this.isShowModalOtp = true;
    },
    async confirmNumberPhone() {
      try {
        const response = await axios.get(
          "user/individual/phone-number/get-otp",
          {
            params: { phoneNums: this.info.phoneNumber },
          }
        );
        if (response.status === 201) {
          this.messageWanning = "The otp code has been sent to your sms";
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    },
    async HandleUpdatePhone() {
      try {
        const response = await axios.put(
          "user/customer-infor/phone-number/update?phoneNumber=" +
            this.info.phoneNumber +
            "&otp=" +
            this.otp
        );
        this.phoneNumber = response.data;
      } catch (error) {
        console.error(error.response.data.message);
      }
    },
    async getAddress() {
      try {
        const response = await axios.get("user/customer-infor/address");
        this.address = response.data;
        console.log(this.address);
      } catch (error) {
        console.error(error);
      }
    },
    async HandleUpdate(ad) {
      const formData = new FormData();
      formData.append("AddressId", ad.id);
      formData.append("Street", ad.street);
      formData.append("Ward", ad.ward);
      formData.append("District", ad.district);
      formData.append("Provine", ad.provine);
      formData.append("Type", ad.type);
      try {
        const response = await axios.put(
          "user/customer-infor/address/update",
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
          this.messageSuccess = "Update  successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAddress();
        }
        console.log(response);
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    async HandleDelete(ad) {
      try {
        const response = await axios.delete(
          "user/customer-infor/address/remove/" + ad.id
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          this.isAlertSuccess = true;
          this.messageSuccess = "Delete address successful!";
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
          this.getAddress();
        }
      } catch (error) {
        this.isAlertError = true;
        this.messagerError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 3000);
        console.error(error);
      }
    },
    async HandleAddAddress() {
      const formData = new FormData();
      formData.append("Street", this.street);
      formData.append("Ward", this.ward);
      formData.append("District", this.district);
      formData.append("Provine", this.province);
      formData.append("Type", this.type);
      try {
        const response = await axios.post(
          "user/customer-infor/address/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async getWishList() {
      try {
        const response = await axios.get("customer/wish-list");
        this.wishlist = response.data;
      } catch (error) {
        console.error(error);
      }
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
    async updateInfor() {
      const formData = new FormData();
      formData.append("Image", this.file);
      formData.append("FirtName", this.info.firtName);
      formData.append("LastName", this.info.lastName);
      formData.append("Gender", this.info.gender);
      formData.append("DoB", this.DoB);
      try {
        await axios.put("user/individual/update", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // if (response.status === 200) {
        //   this.avatar = URL.createObjectURL(this.file);
        // }
        console.log(this.avatar);
      } catch (error) {
        console.error(error);
      }
    },
    async UpdatePasssword() {
      console.log(this.email);
      try {
        const response = await axios.post(
          "customer/forgot-password?email=" + this.email
        );
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          alert("Please confirm the link in your email!");
          this.$router.push({ name: "newPassword" });
        }
      } catch (error) {
        console.error("Error sending link your email:", error);
      }
    },
  },
};
</script>

<style scoped>
/* body {
  background: #f9f9fb;
} */
.profile_customer {
  background: #eaedf330;
}
.view-account {
  margin-top: 17px;
  margin-bottom: 2em;
  /* border: 1px solid rgb(240 239 239); */
}
/* h1 {
  border-bottom: 1px solid rgb(236 234 234);
} */
.side-bar {
  box-shadow: 1px 1px 3px #ccc7c7;
}
.tab-content.col-span-5 .tab-pane.order,
.tab-content.col-span-5 .tab-pane.wishlist {
  overflow: scroll;
  overflow-x: hidden;
  height: 43em;
}
.tab-content.col-span-5
  .tab-pane.order::-webkit-scrollbar-track
  .tab-content.col-span-5
  .tab-pane.wishlist::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
.tab-content.col-span-5
  .tab-pane.order::-webkit-scrollbar
  .tab-content.col-span-5
  .wishlist::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.tab-content.col-span-5
  .tab-pane.order::-webkit-scrollbar-thumb
  .tab-content.col-span-5
  .wishlist::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cdc0aa;
}
.form-control,
.col-form-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(66 32 6);
}
.span_address {
  font-size: 0.9rem;
}
/* .profile_customer {
  background-color: rgb(250 250 250);
} */
.side-bar.col-span-1 {
  background: #ffffff;
}
.view-account .pro-label {
  font-size: 13px;
  padding: 4px 5px;
  position: relative;
  top: -5px;
  margin-left: 10px;
  display: inline-block;
}

.view-account .side-bar {
  padding-bottom: 30px;
}

.view-account .side-bar .user-info {
  text-align: center;
  margin-bottom: 15px;
  padding: 30px;
  color: #616670;
  border-bottom: 1px solid #f3f3f3;
}

.view-account .side-bar .user-info .img-profile {
  width: 120px;
  height: 120px;
  margin-bottom: 15px;
}

.view-account .side-bar .user-info .meta li {
  margin-bottom: 10px;
}

.view-account .side-bar .user-info .meta li span {
  display: inline-block;
  width: 100px;
  margin-right: 5px;
  text-align: right;
}

.view-account .side-bar .user-info .meta li a {
  color: #616670;
}

.view-account .side-bar .user-info .meta li.activity {
  color: #a2a6af;
}

.view-account .side-bar .side-menu {
  text-align: center;
}

.view-account .side-bar .side-menu .nav {
  display: inline-block;
  margin: 0 auto;
}

.view-account .side-bar .side-menu .nav > li {
  font-size: 14px;
  margin-bottom: 0;
  border-bottom: none;
  display: inline-block;
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
}

.view-account .side-bar .side-menu .nav > li:last-child {
  margin-right: 0;
}

.view-account .side-bar .side-menu .nav > li > a {
  display: inline-block;
  color: #9499a3;
  padding: 5px;
  border-bottom: 2px solid transparent;
}

.view-account .side-bar .side-menu .nav > li > a:hover {
  color: #616670;
  background: none;
}
.nav.nav-pills > li > a:hover {
  color: #616670;
  background: none;
  text-decoration: none;
}
.nav.nav-pills li {
  color: #9499a3;
}
.nav.nav-pills > li.active a {
  color: #40babd;
  border-bottom: 2px solid #40babd;
  background: none;
  border-right: none;
}
.view-account .side-bar .side-menu .nav > li.active a {
  color: #40babd;
  border-bottom: 2px solid #40babd;
  background: none;
  border-right: none;
}

.theme-2 .view-account .side-bar .side-menu .nav > li.active a {
  color: #6dbd63;
  border-bottom-color: #6dbd63;
}

.theme-3 .view-account .side-bar .side-menu .nav > li.active a {
  color: #497cb1;
  border-bottom-color: #497cb1;
}

.theme-4 .view-account .side-bar .side-menu .nav > li.active a {
  color: #ec6952;
  border-bottom-color: #ec6952;
}

.view-account .side-bar .side-menu .nav > li .icon {
  display: block;
  font-size: 24px;
  margin-bottom: 5px;
}

.view-account .content-panel {
  padding: 30px;
}

.view-account .content-panel .title {
  margin-bottom: 15px;
  margin-top: 0;
  font-size: 18px;
}

.view-account .content-panel .fieldset-title {
  padding-bottom: 15px;
  border-bottom: 1px solid #eaeaf1;
  margin-bottom: 30px;
  color: #616670;
  font-size: 16px;
}

.view-account .content-panel .avatar .figure img {
  float: right;
  width: 64px;
}

.view-account .content-panel .content-header-wrapper {
  position: relative;
  margin-bottom: 30px;
}

.view-account .content-panel .content-header-wrapper .actions {
  position: absolute;
  right: 0;
  top: 0;
}

.view-account .content-panel .content-utilities {
  position: relative;
  margin-bottom: 30px;
}

.view-account .content-panel .content-utilities .btn-group {
  margin-right: 5px;
  margin-bottom: 15px;
}

.view-account .content-panel .content-utilities .fa {
  font-size: 16px;
  margin-right: 0;
}

.view-account .content-panel .content-utilities .page-nav {
  position: absolute;
  right: 0;
  top: 0;
}

.view-account .content-panel .content-utilities .page-nav .btn-group {
  margin-bottom: 0;
}

.view-account .content-panel .content-utilities .page-nav .indicator {
  color: #a2a6af;
  margin-right: 5px;
  display: inline-block;
}

.view-account .content-panel .mails-wrapper .mail-item {
  position: relative;
  padding: 10px;
  border-bottom: 1px solid #f3f3f3;
  color: #616670;
  overflow: hidden;
}

.view-account .content-panel .mails-wrapper .mail-item > div {
  float: left;
}

.view-account .content-panel .mails-wrapper .mail-item .icheck {
  background-color: #fff;
}

.view-account .content-panel .mails-wrapper .mail-item:hover {
  background: #f9f9fb;
}

.view-account .content-panel .mails-wrapper .mail-item:nth-child(even) {
  background: #fcfcfd;
}

.view-account .content-panel .mails-wrapper .mail-item:nth-child(even):hover {
  background: #f9f9fb;
}

.view-account .content-panel .mails-wrapper .mail-item a {
  color: #616670;
}

.view-account .content-panel .mails-wrapper .mail-item a:hover {
  color: #494d55;
  text-decoration: none;
}

.view-account .content-panel .mails-wrapper .mail-item .checkbox-container,
.view-account .content-panel .mails-wrapper .mail-item .star-container {
  display: inline-block;
  margin-right: 5px;
}

.view-account .content-panel .mails-wrapper .mail-item .star-container .fa {
  color: #a2a6af;
  font-size: 16px;
  vertical-align: middle;
}
.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .star-container
  .fa.fa-star {
  color: #f2b542;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .star-container
  .fa:hover {
  color: #868c97;
}

.view-account .content-panel .mails-wrapper .mail-item .mail-to {
  display: inline-block;
  margin-right: 5px;
  min-width: 120px;
}

.view-account .content-panel .mails-wrapper .mail-item .mail-subject {
  display: inline-block;
  margin-right: 5px;
}

.view-account .content-panel .mails-wrapper .mail-item .mail-subject .label {
  margin-right: 5px;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label:last-child {
  margin-right: 10px;
}

.view-account .content-panel .mails-wrapper .mail-item .mail-subject .label a,
.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label
  a:hover {
  color: #fff;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-1 {
  background: #f77b6b;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-2 {
  background: #58bbee;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-3 {
  background: #f8a13f;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-4 {
  background: #ea5395;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .mail-subject
  .label-color-5 {
  background: #8a40a7;
}

.view-account .content-panel .mails-wrapper .mail-item .time-container {
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #a2a6af;
  text-align: left;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .time-container
  .attachment-container {
  display: inline-block;
  color: #a2a6af;
  margin-right: 5px;
}

.view-account .content-panel .mails-wrapper .mail-item .time-container .time {
  display: inline-block;
  text-align: right;
}

.view-account
  .content-panel
  .mails-wrapper
  .mail-item
  .time-container
  .time.today {
  font-weight: 700;
  color: #494d55;
}

.drive-wrapper {
  padding: 15px;
  background: #f5f5f5;
  overflow: hidden;
}

.drive-wrapper .drive-item {
  width: 130px;
  margin-right: 15px;
  display: inline-block;
  float: left;
}

.drive-wrapper .drive-item:hover {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.drive-wrapper .drive-item-inner {
  padding: 15px;
}

.drive-wrapper .drive-item-title {
  margin-bottom: 15px;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.drive-wrapper .drive-item-title a {
  color: #494d55;
}

.drive-wrapper .drive-item-title a:hover {
  color: #40babd;
}

.theme-2 .drive-wrapper .drive-item-title a:hover {
  color: #6dbd63;
}

.theme-3 .drive-wrapper .drive-item-title a:hover {
  color: #497cb1;
}

.theme-4 .drive-wrapper .drive-item-title a:hover {
  color: #ec6952;
}

.drive-wrapper .drive-item-thumb {
  width: 100px;
  height: 80px;
  margin: 0 auto;
  color: #616670;
}

.drive-wrapper .drive-item-thumb a {
  -webkit-opacity: 0.8;
  -moz-opacity: 0.8;
  opacity: 0.8;
}

.drive-wrapper .drive-item-thumb a:hover {
  -webkit-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
}

.drive-wrapper .drive-item-thumb .fa {
  display: inline-block;
  font-size: 36px;
  margin: 0 auto;
  margin-top: 20px;
}

.drive-wrapper .drive-item-footer .utilities {
  margin-bottom: 0;
}

.drive-wrapper .drive-item-footer .utilities li:last-child {
  padding-right: 0;
}
.drive-list-view .name {
  width: 60%;
}

.drive-list-view .name.truncate {
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.drive-list-view .type {
  width: 15px;
}

.drive-list-view .date,
.drive-list-view .size {
  max-width: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.drive-list-view a {
  color: #494d55;
}

.drive-list-view a:hover {
  color: #40babd;
}

.theme-2 .drive-list-view a:hover {
  color: #6dbd63;
}

.theme-3 .drive-list-view a:hover {
  color: #497cb1;
}

.theme-4 .drive-list-view a:hover {
  color: #ec6952;
}

.drive-list-view td.date,
.drive-list-view td.size {
  color: #a2a6af;
}

@media (max-width: 767px) {
  .view-account .content-panel .title {
    text-align: center;
  }
  .view-account .side-bar .user-info {
    padding: 0;
  }
  .view-account .side-bar .user-info .img-profile {
    width: 60px;
    height: 60px;
  }
  .view-account .side-bar .user-info .meta li {
    margin-bottom: 5px;
  }
  .view-account .content-panel .content-header-wrapper .actions {
    position: static;
    margin-bottom: 30px;
  }
  .view-account .content-panel {
    padding: 0;
  }
  .view-account .content-panel .content-utilities .page-nav {
    position: static;
    margin-bottom: 15px;
  }
  .drive-wrapper .drive-item {
    width: 100px;
    margin-right: 5px;
    float: none;
  }
  .drive-wrapper .drive-item-thumb {
    width: auto;
    height: 54px;
  }
  .drive-wrapper .drive-item-thumb .fa {
    font-size: 24px;
    padding-top: 0;
  }
  .view-account .content-panel .avatar .figure img {
    float: none;
    margin-bottom: 15px;
  }
  .view-account .file-uploader {
    margin-bottom: 15px;
  }
  .view-account .mail-subject {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .view-account .content-panel .mails-wrapper .mail-item .time-container {
    position: static;
  }
  .view-account .content-panel .mails-wrapper .mail-item .time-container .time {
    width: auto;
    text-align: left;
  }
}

@media (min-width: 768px) {
  .view-account .side-bar .user-info {
    padding: 0;
    padding-bottom: 15px;
  }
  .view-account .mail-subject .subject {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
/* lỗi */
@media (min-width: 992px) {
  .view-account .content-panel {
    min-height: 800px;
    border-left: 1px solid #f3f3f7;
  }
  .view-account .mail-subject .subject {
    max-width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .view-account .side-bar {
    /* position: absolute; */
    width: 100%;
    min-height: 600px;
  }
  .view-account .side-bar .user-info {
    margin-bottom: 0;
    border-bottom: none;
    padding: 30px;
  }
  .view-account .side-bar .user-info .img-profile {
    width: 120px;
    height: 120px;
  }
  .view-account .side-bar .side-menu {
    text-align: left;
  }
  .view-account .side-bar .side-menu .nav {
    display: block;
  }
  .view-account .side-bar .side-menu .nav > li {
    display: block;
    float: none;
    font-size: 14px;
    /* border-bottom: 1px solid #f3f3f7; */
    margin-right: 0;
    margin-bottom: 0;
  }
  .view-account .side-bar .side-menu .nav > li > a {
    display: block;
    color: #6b6f77;
    padding: 10px 15px;
    padding-left: 30px;
  }
  .view-account .side-bar .side-menu .nav > li > a:hover {
    background: #f9f9fb;
  }
  .view-account .side-bar .side-menu .nav > li.active a {
    background: #f9f9fb;
    border-right: 4px solid #40babd;
    border-bottom: none;
  }
  .theme-2 .view-account .side-bar .side-menu .nav > li.active a {
    border-right-color: #6dbd63;
  }
  .theme-3 .view-account .side-bar .side-menu .nav > li.active a {
    border-right-color: #497cb1;
  }
  .theme-4 .view-account .side-bar .side-menu .nav > li.active a {
    border-right-color: #ec6952;
  }
  .view-account .side-bar .side-menu .nav > li .icon {
    font-size: 24px;
    vertical-align: middle;
    text-align: center;
    width: 40px;
    display: inline-block;
  }
}
/* setting */
.settings {
  color: #4b4343;
}
.row.mb-6 input {
  color: rgb(66 32 6);
}
.my-1 .btn {
  background-color: #4f4c3d;
  color: white;
  font-size: 95%;
}
.settings .avatar {
  /* padding-top: 40%; */
  padding-left: 30%;
}
/* wishlist */
.product {
  position: relative;
  background-color: white;
}
.product_label {
  position: absolute;
  width: 25%;
  border-radius: 1rem;
  text-align: center;
  font-size: 13px;
  top: 4%;
  left: 70%;
}
.btn_add {
  background-color: rgb(103, 176, 80);
  color: white;
  padding: 0.4rem 1.5rem 0.4rem 1.5rem;
  border-radius: 5px;
  font-weight: 400;
}
/* orrder */
/* all */
h3 {
  font-size: 16px;
}
.text-navy {
  color: #1ab394;
}
.cart-product-imitation {
  text-align: center;
  padding-top: 30px;
  height: 80px;
  width: 80px;
  background-color: #f8f8f9;
}
table.shoping-cart-table {
  margin-bottom: 0;
}
table.shoping-cart-table tr td {
  border: none;
}
table.shoping-cart-table tr td.desc,
table.shoping-cart-table tr td:first-child {
  text-align: left;
}
table.shoping-cart-table tr td:last-child {
  width: 80px;
}
.ibox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 15px 20px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
}
.date_order {
  padding-left: 79%;
}

/* order_detail */
.card {
  border: none;
}
.logo {
  background-color: #eeeeeea8;
}
.totals tr td {
  font-size: 13px;
}
.footer {
  background-color: #eeeeeea8;
}
.footer span {
  font-size: 12px;
}
.product-qty span {
  font-size: 12px;
  color: #c5c0c0;
}
/* transport */
.track-line {
  height: 2px !important;
  background-color: #488978;
  opacity: 1;
}

.dot {
  height: 10px;
  width: 10px;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 0px;
  background-color: #488978;
  border-radius: 50%;
  display: inline-block;
}

.big-dot {
  height: 25px;
  width: 25px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  background-color: #488978;
  border-radius: 50%;
  display: inline-block;
}

.big-dot i {
  font-size: 12px;
}

.card-stepper {
  z-index: 0;
}
.product_transport {
  background-color: white;
  border-radius: 10px;
  margin-top: -84%;
  padding: 0.3em;
}
hr .my-4 {
  height: 1px;
}
.card-body {
  border-bottom: 1px solid rgb(240, 235, 235);
}
.category.nav.nav-tabs > li > a {
  color: #58606f;
  font-weight: 500;
}
.form_edit .form-control {
  font-size: 88%;
}
.form_edit {
  font-size: 95%;
}
.address .form-control {
  font-size: 97%;
}
.form-control {
  background-color: #e8eef387;
  border: none;
}

.inp_otp {
  margin-left: 147px;
  margin-right: auto;
  white-space: 4px;
}

.inp_otp .input + .input {
  margin-left: 0.5em;
}

.inp_otp .input {
  color: #060606;
  height: 2em;
  width: 2em;
  float: left;
  text-align: center;
  background: #00000000;
  outline: none;
  border: 1px #060505 solid;
  border-radius: 5px;
  transition: all 0.6s ease;
  font-size: larger;
}

.inp_otp .input:focus {
  outline: none;
  border: 1px rgb(0, 0, 0) bfb solid;
}

.inp_otp .input:not(:placeholder-shown) {
  background-color: #fff;
  width: 1em;
  height: 1em;
}

.button_otp {
  padding-left: 42px;
  margin-right: auto;
  background-color: #433b3bf5;
  color: #fff;
  width: 8.5em;
  height: 2.3em;
  border: #b5b5b5 1px solid;
  border-radius: 5px;
  transition: all 0.5s ease;
}

.button_otp:hover {
  background-color: #fff;
  color: #000;
}
/* .container {
  background-color: rgb(250 250 250);
} */
.moon .container {
  background-color: transparent;
}
.moon .profile,
.moon .side-menu li a,
.moon .user-info span {
  color: #f1ebe4;
}
.moon .view-account .user-info,
.moon .profile_customer,
.moon .side-bar.col-span-1 {
  background-color: transparent;
}
.moon .view-account {
  background-color: #f2f1f0;
}
.side-bar {
  /* border: 1px solid rgb(236 234 234); */
  border-radius: 7px;
}
.nav {
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  color: #000000;
}
.moon .nav {
  border-bottom: 1px solid rgba(241, 235, 228, 0.1);
  color: #ffffff;
}
.moon .view-account .side-bar .side-menu .nav > li > a {
  color: #97928d;
}
.moon .view-account .side-bar .side-menu .nav > li {
  border-bottom: none;
}
.moon .side-bar.col-span-1,
.moon .tab-content.col-span-5 {
  /* border: 1px solid #f1ebe4; */
  border: 1px solid rgb(240 239 239);
}
/* .moon .view-account .side-bar .user-info .meta li.activity,
.moon .view-account .side-bar .user-info .meta li {
  color: white;
} */
.moon h1 {
  border-bottom: 1px solid #dcdbdb;
}
.moon .view-account .side-bar .side-menu .nav > li.active a {
  background: #504f4c;
  border-right: 4px solid #81ccb7;
  color: white;
}
/* .image-input.image-input-outline .image-input-wrapper {
  border: 3px solid #ffffff;
  box-shadow: 0 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.075);
}
.image-input {
  position: relative;
  display: inline-block;
  border-radius: 0.475rem;
  background-repeat: no-repeat;
  background-size: cover;
} */
/* .image-input-empty {
  background-image: url(/metronic8/demo7/assets/media/svg/avatars/blank.svg);
} */
.avatar_upload {
  /* background-image: url("@/assets/images/avatar.jpg"); */
  position: relative;
  display: inline-block;
  border-radius: 0.475rem;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #ffffff;
  box-shadow: 0 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.075);
  width: 6em;
}
.form {
  /* background: #eaedf330; */
  border-radius: 7px;
  box-shadow: 1px 1px 3px #c0c0c0;
}
/* .tab-content.col-span-5.ml-10 {
  box-shadow: 1px 1px 3px #c0c0c0;
} */
</style>
