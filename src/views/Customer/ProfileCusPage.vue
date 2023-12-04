<template>
  <!-- <div v-if="customer / customer - infor"> -->
  <div class="profile_customer">
    <div class="nav pt-36 pb-3 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item font-semibold text-yellow-950">
            <router-link to="customerIndex">Home</router-link>
          </li>

          <li class="breadcrumb-item active font-medium" aria-current="page">
            Profile
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
            <div class="side-bar col-span-1 h-56">
              <div class="user-info">
                <img :src="info.avatar" alt="avatar" />
                <!-- <img
                  class="rounded-md"
                  src="@/assets/images/avatar.jpg"
                  alt=""
                /> -->
                <ul class="meta list list-unstyled">
                  <li class="name font-medium mt-2">
                    {{ info.firstName }} {{ info.lastName }}
                  </li>
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
                      ><span class="fa-solid fa-shield-halved"></span> Guarantee
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#feedback"
                      aria-controls="feedback"
                      role="tab"
                      data-toggle="tab"
                      ><span class="bi bi-star-fill"></span> Feedback
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
                  <div class="flex">
                    <h1
                      class="py-3 font-semibold text-base pl-10 text-yellow-950"
                    >
                      Information
                    </h1>
                    <div class="absolute right-40 flex gap-x-3">
                      <div
                        v-if="info.isActivated === true"
                        @click="opentModal('disable', 'null')"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        class="bg-yellow-700 px-2 py-1 text-white rounded-md text-sm cursor-pointer mt-3 font-medium"
                      >
                        Disable
                      </div>

                      <div
                        v-if="info.twoFactorEnabled === true"
                        @click="HandleToggole2fa"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        class="bg-lime-700 px-2 py-1 text-white rounded-md text-sm cursor-pointer mt-3 font-medium"
                      >
                        Set 2F
                      </div>
                      <div
                        v-if="info.twoFactorEnabled === false"
                        @click="HandleToggole2fa"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        class="bg-lime-700 px-2 py-1 text-white rounded-md text-sm cursor-pointer mt-3 font-medium"
                      >
                        Cancel 2F
                      </div>
                    </div>

                    <div
                      v-if="info.isActivated === false"
                      @click="opentModal('enable', 'null')"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      class="absolute right-40 bg-lime-700 px-2 py-1 text-white rounded-md text-sm cursor-pointer mt-3"
                    >
                      Enable
                    </div>
                    <modal
                      v-if="modalType == 'disable'"
                      @close="modalType == null"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div
                          class="flex items-center text-base font-semibold text-yellow-950"
                        >
                          Disable Account
                        </div>
                      </template>
                      <template v-slot:body>
                        <div class="text-sm text-left">
                          <div class="mx-2 my-2">
                            <div class="row mb-6">
                              <label class="col-lg-4 col-form-label fw-medium"
                                >Password</label
                              >
                              <div class="col-lg-8">
                                <input
                                  v-model="disablePassword"
                                  type="password"
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
                            @click="handleDisable"
                          >
                            Disable
                          </span>
                        </div>
                      </template>
                    </modal>
                    <modal
                      v-if="modalType == 'enable'"
                      @close="modalType == null"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div
                          class="flex items-center text-base font-semibold text-yellow-950"
                        >
                          Enable Account
                        </div>
                      </template>
                      <template v-slot:body>
                        <div class="text-sm text-left">
                          <div class="mx-2 my-2">
                            <div class="row mb-6">
                              <label class="col-lg-4 col-form-label fw-medium"
                                >Email</label
                              >
                              <div class="col-lg-8">
                                <div class="input-group mb-3">
                                  <input
                                    v-model="email"
                                    type="text"
                                    class="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                  />
                                  <div class="input-group-append">
                                    <button
                                      class="btn btn-outline-secondary"
                                      type="button"
                                      @click="handleEnableOtp"
                                    >
                                      Send Otp
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row mb-6">
                              <label class="col-lg-4 col-form-label fw-medium"
                                >Otp</label
                              >
                              <div class="col-lg-8">
                                <input
                                  v-model="otp"
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
                            @click="handleEnable"
                          >
                            Enable
                          </span>
                        </div>
                      </template>
                    </modal>
                  </div>
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
                          class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-cyan-600 hover:bg-cyan-800 text-sm rounded-md transition duration-700 ease-in-out font-medium"
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
                                data-dismiss="modal"
                                @click.prevent="HandleUpdatePhone"
                              >
                                Save changes
                              </span>
                            </div>
                          </template>
                        </modal>
                      </div>
                    </div>
                    <div class="row mb-4 flex">
                      <label class="col-lg-4 font-medium text-sm text-slate-600"
                        >Point</label
                      >
                      <label
                        class="col-lg-8 font-semibold text-sm text-yellow-950"
                        >{{ info.point }}
                        <i
                          class="bi bi-currency-dollar text-amber-500 text-sm"
                        ></i
                      ></label>
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
                            v-model="info.firstName"
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
                            type="date"
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
                      <div
                        v-if="ad.addressType === 'HOME'"
                        class="span_address"
                      >
                        <div
                          class="border-solid border-2 border-zinc-600 rounded-full"
                        >
                          <span
                            class="px-2 py-1 font-medium text-zinc-600 text-xs"
                            >home</span
                          >
                        </div>
                      </div>
                      <div
                        v-if="ad.addressType === 'COMPANY'"
                        class="span_address"
                      >
                        <div
                          class="border-solid border-2 border-zinc-600 rounded-full"
                        >
                          <span
                            class="px-2 py-1 font-medium text-zinc-600 text-xs"
                            >company</span
                          >
                        </div>
                      </div>
                      <div class="absolute right-40 flex gap-x-5">
                        <button
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          data-backdrop="false"
                          @click="opentModal('editAddress', ad)"
                          class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-slate-600 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                        >
                          Edit
                        </button>
                        <button
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          data-backdrop="false"
                          @click="opentModal('deleteAddress', ad)"
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
                      <modal
                        v-if="modalType == 'deleteAddress'"
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
                            <b>
                              {{ addressModal.street }}
                              {{ addressModal.ward }}
                              {{ addressModal.district }}
                              {{ addressModal.provine }}?</b
                            >
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
                    </div>
                  </div>
                </div>
                <div class="form add_address bg-white mt-10">
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
                            required
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Province</label
                        >
                        <div class="col-lg-8">
                          <select
                            v-if="provinces"
                            v-model="province"
                            class="form-select text-sm"
                            aria-label="Default select example"
                            @change="handleDistrict"
                          >
                            <option selected>Choose Province</option>
                            <option
                              v-for="p in provinces.data"
                              :key="p.ProvinceID"
                              :value="p.ProvinceID"
                              required
                            >
                              {{ p.ProvinceName }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >District</label
                        >
                        <div class="col-lg-8">
                          <select
                            v-if="districts"
                            v-model="district"
                            class="form-select text-sm"
                            aria-label="Default select example"
                            @change="handleWard"
                          >
                            <option selected>Choose District</option>
                            <option
                              v-for="d in districts.data"
                              :key="d.DistrictID"
                              :value="d.DistrictID"
                              required
                            >
                              {{ d.DistrictName }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Ward</label
                        >
                        <div class="col-lg-8">
                          <select
                            v-if="ward"
                            v-model="WardCode"
                            class="form-select text-sm"
                            aria-label="Default select example"
                            @change="HandleChooseWard"
                          >
                            <option selected>Choose Ward</option>
                            <option
                              v-for="w in ward.data"
                              :key="w.WardCode"
                              :value="w.WardCode"
                              required
                            >
                              {{ w.WardName }}
                            </option>
                          </select>
                        </div>
                      </div>

                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Label As</label
                        >
                        <div class="col-lg-8">
                          <select
                            class="form-select address"
                            aria-label="Default select example"
                            v-model="type"
                          >
                            <option selected>Set as Default Address</option>
                            <option value="DEFAULT">DEFAULT</option>
                            <option value="HOME">HOME</option>
                            <option value="COMPANY">COMPANY</option>
                          </select>
                        </div>
                      </div>
                      <div
                        class="border-solid border border-indigo-black opacity-30"
                      ></div>
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
              <div role="tabpanel" class="tab-pane active" id="order">
                <div class="">
                  <div class="group-tabs ml-2">
                    <!-- Nav tabs -->
                    <div class="nav-order">
                      <ul
                        class="nav nav-pills bg-white flex gap-x-20 pl-20 py-3 text-base font-medium"
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
                            >Pending</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#completed"
                            aria-controls="completed"
                            role="tab"
                            data-toggle="tab"
                            >Preparing</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#completed"
                            aria-controls="completed"
                            role="tab"
                            data-toggle="tab"
                            >Delivering</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#completed"
                            aria-controls="completed"
                            role="tab"
                            data-toggle="tab"
                            >Delivered</a
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
                      <div
                        role="tabpanel"
                        class="tab-pane active"
                        id="all"
                        v-if="orderAll.length"
                      >
                        <div class="">
                          <div
                            clas="product"
                            v-for="or in orderAll"
                            :key="or.orderId"
                          >
                            <div class="ibox-content mt-3 rounded-md shadow-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div class="font-medium text-gray-600">
                                  ID Order: {{ or.orderId }}
                                </div>
                                <div class="absolute right-36">
                                  <div
                                    v-if="or.status === 'Pending'"
                                    class="flex gap-x-3"
                                  >
                                    <div
                                      class="bg-yellow-500 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                    >
                                      Pending
                                    </div>
                                    <div
                                      @click="HandleCancelOrder(or.orderId)"
                                      class="bg-red-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                    >
                                      Cancel
                                    </div>
                                  </div>
                                  <div
                                    v-if="or.status === 'Processing'"
                                    class="flex gap-x-3"
                                  >
                                    <div
                                      class="bg-emerald-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                    >
                                      Processing
                                    </div>
                                    <div
                                      @click="HandleCancelOrder(or.orderId)"
                                      class="bg-red-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                    >
                                      Cancel
                                    </div>
                                  </div>
                                  <div
                                    v-if="or.status === 'Preparing'"
                                    class="bg-red-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                  >
                                    Preparing
                                  </div>
                                  <div
                                    v-if="or.status === 'Delivering'"
                                    class="bg-amber-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                  >
                                    Delivering
                                  </div>
                                  <div
                                    v-if="or.status === 'Delivered'"
                                    class="flex gap-x-3"
                                  >
                                    <div
                                      class="bg-lime-700 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                    >
                                      Delivered
                                    </div>
                                    <div
                                      data-toggle="modal"
                                      data-target="#exampleModalLong"
                                      data-backdrop="false"
                                      @click="opentModalOrder('guarantee', or)"
                                      class="bg-red-700 px-2 py-1 text-white rounded-md text-sm mr-2 cursor-pointer"
                                    >
                                      Guarantee
                                    </div>
                                    <div
                                      data-toggle="modal"
                                      data-target="#exampleModalLong"
                                      data-backdrop="false"
                                      @click="opentModalOrder('feedback', or)"
                                      class="bg-sky-600 px-2 py-1 text-white rounded-md text-sm mr-2 cursor-pointer"
                                    >
                                      Feedback
                                    </div>
                                  </div>
                                </div>
                                <modal
                                  v-if="modalType == 'guarantee'"
                                  @close="closeModal"
                                  data-target="#myModal"
                                >
                                  <template v-slot:title>
                                    <h5
                                      class="modal-title font-semibold text-lg text-yellow-950"
                                      id="exampleModalLabel"
                                    >
                                      Add Guarantee
                                    </h5>
                                  </template>
                                  <template v-slot:body>
                                    <div
                                      class="w-full items-center gap-x-6 pb-3"
                                    >
                                      <label
                                        for="exampleFormControlInput1 font-semibold"
                                        >Picture</label
                                      >
                                      <input
                                        id="picture"
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                        :maxFileSize="1000000"
                                        ref="file"
                                        multiple
                                        @change="onFile"
                                        class="bg-slate-100 h-10 w-full rounded-md border border-input px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                                      />
                                      <div class="image_upload flex gap-x-4">
                                        <div
                                          v-for="url in arrayUrl"
                                          :key="url"
                                          class="flex"
                                        >
                                          <img
                                            class="object-contain h-48 w-96"
                                            v-if="url"
                                            :src="url"
                                            alt="Avatar"
                                          />
                                          <label
                                            @click="HandleRemoveImage(url)"
                                            class="bi bi-x cursor-pointer"
                                          ></label>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="mt-3">
                                      <label class="col-form-label fw-medium"
                                        >Warranty Reasons
                                      </label>
                                      <div class="">
                                        <input
                                          v-model="reason"
                                          type="text"
                                          class="form-control border-none bg-neutral-100"
                                          id="firstname"
                                          aria-describedby="firstnameHelp"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </template>
                                  <template v-slot:footer
                                    ><div
                                      class="bg-yellow-900 rounded-md cursor-pointer"
                                    >
                                      <span
                                        type="button"
                                        class="btn text-white"
                                        data-dismiss="modal"
                                        @click.prevent="CreateGuarantee"
                                      >
                                        Create
                                      </span>
                                    </div></template
                                  >
                                </modal>
                                <modal
                                  v-if="modalType == 'feedback'"
                                  @close="closeModal"
                                  data-target="#myModal"
                                >
                                  <template v-slot:title>
                                    <h5
                                      class="modal-title font-semibold text-base"
                                      id="exampleModalLabel"
                                    >
                                      Feedback
                                    </h5>
                                  </template>
                                  <template v-slot:body>
                                    <div>
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label font-medium"
                                        >Furniture</label
                                      >
                                      <select
                                        v-if="orderModel.furniture.length"
                                        v-model="furSpeFeedback"
                                        class="form-select text-sm"
                                        aria-label="Default select example"
                                      >
                                        <option selected>Choose Label</option>
                                        <option
                                          v-for="furSpe in orderModel.furniture"
                                          :key="furSpe.furnitureSpecificationId"
                                          :value="
                                            furSpe.furnitureSpecificationId
                                          "
                                        >
                                          {{
                                            furSpe.furnitureSpecificationname
                                          }}
                                        </option>
                                      </select>
                                    </div>
                                    <div class="mt-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label font-medium"
                                        >Image</label
                                      >
                                      <div
                                        v-if="arrayUrl.length"
                                        class="flex gap-x-2"
                                      >
                                        <div
                                          v-for="url in arrayUrl"
                                          :key="url"
                                          class="flex gap-x-2"
                                        >
                                          <img
                                            class="object-contain h-48 w-96"
                                            v-if="url"
                                            :src="url"
                                            alt="Avatar"
                                          />
                                          <label
                                            @click="HandleRemoveImage(url)"
                                            class="bi bi-x cursor-pointer"
                                          ></label>
                                        </div>
                                      </div>
                                      <div v-else class="ml-24">
                                        <label
                                          class="custum-file-upload"
                                          for="file"
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
                                            accept=".png, .jpg, .jpeg"
                                            :maxFileSize="1000000"
                                            ref="file"
                                            multiple
                                            @change="onFile"
                                            id="file"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    <div
                                      class="bg-white grid grid-cols-6 gap-2 rounded-xl p-2 text-sm"
                                    >
                                      <label class="font-medium text-sm"
                                        >Content</label
                                      >
                                      <textarea
                                        v-model="content"
                                        placeholder="Your feedback..."
                                        class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                                      ></textarea>
                                    </div>
                                    <div
                                      class="bg-white flex gap-2 rounded-xl p-2 text-sm mt-3"
                                    >
                                      <label class="font-medium text-sm"
                                        >Vote Star</label
                                      >
                                      <div class="rating">
                                        <input
                                          v-model="star"
                                          value="5"
                                          name="rate"
                                          id="star5"
                                          type="radio"
                                          required
                                        />
                                        <label title="text" for="star5"></label>
                                        <input
                                          value="4"
                                          name="rate"
                                          v-model="star"
                                          id="star4"
                                          type="radio"
                                          required
                                        />
                                        <label title="text" for="star4"></label>
                                        <input
                                          value="3"
                                          name="rate"
                                          v-model="star"
                                          id="star3"
                                          type="radio"
                                          checked=""
                                          required
                                        />
                                        <label title="text" for="star3"></label>
                                        <input
                                          value="2"
                                          name="rate"
                                          v-model="star"
                                          id="star2"
                                          type="radio"
                                          required
                                        />
                                        <label title="text" for="star2"></label>
                                        <input
                                          value="1"
                                          name="rate"
                                          v-model="star"
                                          id="star1"
                                          type="radio"
                                          required
                                        />
                                        <label title="text" for="star1"></label>
                                      </div>
                                    </div>
                                    <div class="ml-2 py-3">
                                      <label class="font-medium">
                                        <input
                                          v-model="anonymous"
                                          type="checkbox"
                                          class="accent-pink-500"
                                        />
                                        Anonymous
                                      </label>
                                    </div>
                                  </template>
                                  <template v-slot:footer
                                    ><div
                                      class="bg-yellow-900 rounded-md cursor-pointer"
                                    >
                                      <span
                                        type="button"
                                        class="btn text-white"
                                        data-dismiss="modal"
                                        @click.prevent="HandleFeedback"
                                      >
                                        Feedback
                                      </span>
                                    </div></template
                                  >
                                </modal>
                                <!-- <div class="date_order">Date: 9/5/2023</div> -->
                              </div>
                              <hr class="my-3 h-px text-slate-300" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody
                                    v-for="fur in or.furniture"
                                    :key="fur.furnitureId"
                                  >
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
                                        <h3 class="mb-2 break-all mt-3">
                                          <span class="text-navy font-bold">
                                            {{ fur.furnitureName }}
                                          </span>
                                        </h3>
                                        <h3>
                                          <div class="specificationname">
                                            <span
                                              class="font-semibold info_customizeOrder"
                                            >
                                              Specification name:
                                            </span>
                                            <span
                                              class="font-medium info_customizeOrder"
                                            >
                                              {{
                                                fur.furnitureSpecificationname
                                              }}
                                            </span>
                                          </div>
                                        </h3>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        <div class="flex gap-x-4 mt-3">
                                          <label
                                            class="quantity font-meidum info_customizeOrder"
                                            >Quantity:</label
                                          >
                                          <span
                                            class="font-medium info_customizeOrder mr-10 mt-1"
                                            >x{{ fur.quantity }}</span
                                          >
                                        </div>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        <div
                                          class="flex gap-x-4 mt-1 mr-2 mt-3"
                                        >
                                          <label
                                            class="quantity font-meidum info_customizeOrder"
                                            >Cost:</label
                                          >
                                          <h4
                                            class="font-medium text-red-500 mt-1 text-sm"
                                          >
                                            ${{ fur.cost }}
                                          </h4>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <hr class="my-3 h-px text-slate-300" />
                                <div class="flex">
                                  <div class="m-t-sm my-2 ml-2">
                                    <div
                                      class="flex gap-x-2"
                                      data-toggle="modal"
                                      data-target="#exampleModalLong"
                                      data-backdrop="false"
                                      @click="opentModalOrder('detail', or)"
                                    >
                                      <i
                                        class="fa-solid fa-circle-info text-sm text-gray-600"
                                      ></i>
                                      <span
                                        class="font-medium text-sm cursor-pointer text-gray-900"
                                        >Detail</span
                                      >
                                    </div>
                                    <modal
                                      v-if="modalType == 'detail'"
                                      @close="closeModal"
                                      data-target="#myModal"
                                    >
                                      <template v-slot:title>
                                        <h5
                                          class="modal-title font-semibold"
                                          id="exampleModalLabel"
                                        >
                                          Detail Order Transport
                                        </h5>
                                      </template>
                                      <template v-slot:body>
                                        <div class="invoice mt-2">
                                          <span class="font-weight-bold d-block"
                                            >Infromation</span
                                          >
                                          <div class="py-2">
                                            <span
                                              class="d-inlineblock pr-3 text-red-500"
                                              ><i
                                                class="fa-solid fa-location-dot pr-1"
                                              ></i>
                                              Shiping Address:</span
                                            >
                                            <span>12 Me Tri- Ha Noi</span>
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
                                                    <div class="py-2">
                                                      <span class="mr-3"
                                                        >Order Id</span
                                                      >
                                                      <span>{{
                                                        orderModel.orderId
                                                      }}</span>
                                                    </div>
                                                  </td>
                                                  <td>
                                                    <div class="py-2">
                                                      <span
                                                        class="d-block text-muted"
                                                        >Payment</span
                                                      >
                                                      <span
                                                        ><img
                                                          class="w-1/12"
                                                          v-if="
                                                            orderModel.paymentMethod ===
                                                            'VNPAYQR'
                                                          "
                                                          src="@/assets/images/payment_method/bank.png"
                                                          alt="image"
                                                        />
                                                        <img
                                                          class="w-1/12"
                                                          v-if="
                                                            orderModel.paymentMethod ===
                                                            'VNPAY'
                                                          "
                                                          src="@/assets/images/payment_method/vnpay.png"
                                                          alt="image"
                                                        />
                                                      </span>
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
                                              <tbody
                                                v-for="fur in orderModel.furniture"
                                                :key="fur.furnitureId"
                                              >
                                                <tr>
                                                  <td width="20%">
                                                    <img
                                                      src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                      width="90"
                                                    />
                                                  </td>

                                                  <td width="60%">
                                                    <span
                                                      class="font-weight-bold"
                                                    >
                                                      {{
                                                        fur.furnitureSpecificationname
                                                      }}</span
                                                    >
                                                    <div class="product-qty">
                                                      <span class="d-block"
                                                        >Quantity:{{
                                                          fur.quantity
                                                        }}</span
                                                      >
                                                    </div>
                                                  </td>
                                                  <td width="20%">
                                                    <div class="text-right">
                                                      <span
                                                        class="font-weight-bold"
                                                        >${{ fur.cost }}</span
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
                                            <div class="col-md-5">
                                              <table
                                                class="table table-borderless"
                                              >
                                                <tbody class="totals">
                                                  <tr>
                                                    <td>
                                                      <div class="text-left">
                                                        <span class="text-muted"
                                                          >Shipping Fee</span
                                                        >
                                                      </div>
                                                    </td>
                                                  </tr>

                                                  <tr
                                                    class="border-top border-bottom"
                                                  >
                                                    <td>
                                                      <div class="text-left">
                                                        <span
                                                          class="font-weight-bold"
                                                          >Subtotal</span
                                                        >
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <div class="text-right">
                                                        <span
                                                          class="font-weight-bold"
                                                          >${{
                                                            orderModel.totalCost
                                                          }}</span
                                                        >
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                          <p class="font-weight-bold mb-0">
                                            Thanks for shopping with us!
                                          </p>
                                        </div>
                                      </template>
                                      <template v-slot:footer> </template>
                                    </modal>
                                  </div>

                                  <div class="flex gap-x-4 absolute right-40">
                                    <span
                                      class="total_cost_order font-semibold mt-2"
                                      >Total Cost:
                                    </span>
                                    <span
                                      class="font-bold text-lg text-red-500 mt-1"
                                      >${{ or.totalCost }}</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="transport">
                        <div class="">
                          <div
                            clas="product"
                            v-for="or in orderPending"
                            :key="or.orderId"
                          >
                            <div class="ibox-content mt-3 rounded-md shadow-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div
                                  class="font-semibold text-gray-600 orderId"
                                >
                                  ID Order: {{ or.orderId }}
                                </div>
                                <div class="absolute right-36">
                                  <div
                                    v-if="or.status === 'Delivering'"
                                    class="bg-amber-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                  >
                                    Delivering
                                  </div>
                                </div>
                                <!-- <div class="date_order">Date: 9/5/2023</div> -->
                              </div>
                              <hr class="my-3 h-px text-slate-300" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody
                                    v-for="fur in or.furniture"
                                    :key="fur.furnitureId"
                                  >
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
                                        <h3 class="mb-2 mt-3">
                                          <span class="text-navy font-bold">
                                            {{ fur.furnitureName }}
                                          </span>
                                        </h3>
                                        <h3>
                                          <div class="specificationname">
                                            <span class="font-semibold text-sm">
                                              Specification name:
                                            </span>
                                            <span class="font-medium text-sm">
                                              {{
                                                fur.furnitureSpecificationname
                                              }}
                                            </span>
                                          </div>
                                        </h3>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        <div class="flex gap-x-4 mt-3">
                                          <label
                                            class="quantity font-meidum text-slate-600"
                                            >Quantity:</label
                                          >
                                          <span
                                            class="font-medium text-slate-600"
                                            >x{{ fur.quantity }}</span
                                          >
                                        </div>
                                      </td>
                                      <td>
                                        <h4
                                          class="font-medium text-red-500 mt-3"
                                        >
                                          ${{ fur.cost }}
                                        </h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <hr class="my-3 h-px text-slate-300" />
                                <div class="flex">
                                  <div class="m-t-sm my-2 ml-2">
                                    <div
                                      class="flex gap-x-2"
                                      data-toggle="modal"
                                      data-target="#exampleModalLong"
                                      data-backdrop="false"
                                      @click="opentModalOrder('detail', or)"
                                    >
                                      <i
                                        class="fa-solid fa-circle-info text-sm"
                                      ></i>
                                      <span class="font-medium text-sm"
                                        >Detail</span
                                      >
                                    </div>
                                    <modal
                                      v-if="modalType == 'detail'"
                                      @close="closeModal"
                                      data-target="#myModal"
                                    >
                                      <template v-slot:title>
                                        <h5
                                          class="modal-title font-medium"
                                          id="exampleModalLabel"
                                        >
                                          Detail Order Transport
                                        </h5>
                                      </template>
                                      <template v-slot:body>
                                        <div class="invoice mt-2">
                                          <span class="font-weight-bold d-block"
                                            >Infromation</span
                                          >
                                          <div class="py-2">
                                            <span
                                              class="d-inlineblock pr-3 text-red-500"
                                              ><i
                                                class="fa-solid fa-location-dot pr-1"
                                              ></i>
                                              Shiping Address:</span
                                            >
                                            <span>12 Me Tri- Ha Noi</span>
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
                                                    <div class="py-2">
                                                      <span class="mr-3"
                                                        >Order Id</span
                                                      >
                                                      <span>{{
                                                        orderModel.orderId
                                                      }}</span>
                                                    </div>
                                                  </td>
                                                  <td>
                                                    <div class="py-2">
                                                      <span
                                                        class="d-block text-muted"
                                                        >Payment</span
                                                      >
                                                      <span
                                                        ><img
                                                          class="w-1/12"
                                                          v-if="
                                                            orderModel.paymentMethod ===
                                                            'VNPAYQR'
                                                          "
                                                          src="@/assets/images/payment_method/bank.png"
                                                          alt="image"
                                                        />
                                                        <img
                                                          class="w-1/12"
                                                          v-if="
                                                            orderModel.paymentMethod ===
                                                            'VNPAY'
                                                          "
                                                          src="@/assets/images/payment_method/vnpay.png"
                                                          alt="image"
                                                        />
                                                      </span>
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
                                              <tbody
                                                v-for="fur in orderModel.furniture"
                                                :key="fur.furnitureId"
                                              >
                                                <tr>
                                                  <td width="20%">
                                                    <img
                                                      src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                      width="90"
                                                    />
                                                  </td>

                                                  <td width="60%">
                                                    <span
                                                      class="font-weight-bold"
                                                    >
                                                      {{
                                                        fur.furnitureSpecificationname
                                                      }}</span
                                                    >
                                                    <div class="product-qty">
                                                      <span class="d-block"
                                                        >Quantity:{{
                                                          fur.quantity
                                                        }}</span
                                                      >
                                                    </div>
                                                  </td>
                                                  <td width="20%">
                                                    <div class="text-right">
                                                      <span
                                                        class="font-weight-bold"
                                                        >${{ fur.cost }}</span
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
                                            <div class="col-md-5">
                                              <table
                                                class="table table-borderless"
                                              >
                                                <tbody class="totals">
                                                  <tr>
                                                    <td>
                                                      <div class="text-left">
                                                        <span class="text-muted"
                                                          >Shipping Fee</span
                                                        >
                                                      </div>
                                                    </td>
                                                  </tr>

                                                  <tr
                                                    class="border-top border-bottom"
                                                  >
                                                    <td>
                                                      <div class="text-left">
                                                        <span
                                                          class="font-weight-bold"
                                                          >Subtotal</span
                                                        >
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <div class="text-right">
                                                        <span
                                                          class="font-weight-bold"
                                                          >${{
                                                            orderModel.totalCost
                                                          }}</span
                                                        >
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                          <p class="font-weight-bold mb-0">
                                            Thanks for shopping with us!
                                          </p>
                                        </div>
                                      </template>
                                      <template v-slot:footer> </template>
                                    </modal>
                                  </div>

                                  <div class="flex gap-x-4 absolute right-40">
                                    <span class="font-semibold mt-1"
                                      >Total Cost:
                                    </span>
                                    <span
                                      class="font-medium text-xl text-red-500"
                                      >${{ or.totalCost }}</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="completed">
                        <div class="">
                          <div
                            clas="product"
                            v-for="or in orderDeliveried"
                            :key="or.orderId"
                          >
                            <div class="ibox-content mt-3 rounded-md shadow-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div class="font-semibold text-gray-600">
                                  ID Order: {{ or.orderId }}
                                </div>
                                <div class="absolute right-36">
                                  <div
                                    v-if="or.status === 'Pending'"
                                    class="bg-yellow-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                  >
                                    Pending
                                  </div>
                                  <div
                                    v-if="or.status === 'Processing'"
                                    class="bg-lime-700 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                  >
                                    Processing
                                  </div>
                                  <div
                                    v-if="or.status === 'Preparing'"
                                    class="bg-red-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                  >
                                    Preparing
                                  </div>
                                  <div
                                    v-if="or.status === 'Delivering'"
                                    class="bg-red-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                  >
                                    Delivering
                                  </div>
                                  <div
                                    v-if="or.status === 'Delivered'"
                                    class="bg-red-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                                  >
                                    Delivered
                                  </div>
                                </div>
                                <!-- <div class="date_order">Date: 9/5/2023</div> -->
                              </div>
                              <hr class="my-3 h-px text-slate-300" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody
                                    v-for="fur in or.furniture"
                                    :key="fur.furnitureId"
                                  >
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
                                        <h3 class="mb-2 mt-3">
                                          <span class="text-navy font-bold">
                                            {{ fur.furnitureName }}
                                          </span>
                                        </h3>
                                        <h3>
                                          <div class="specificationname">
                                            <span class="font-semibold text-sm">
                                              Specification name:
                                            </span>
                                            <span class="font-medium text-sm">
                                              {{
                                                fur.furnitureSpecificationname
                                              }}
                                            </span>
                                          </div>
                                        </h3>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        <div class="flex gap-x-4 mt-3">
                                          <label
                                            class="quantity font-meidum text-slate-600"
                                            >Quantity:</label
                                          >
                                          <span
                                            class="font-medium text-slate-600"
                                            >x{{ fur.quantity }}</span
                                          >
                                        </div>
                                      </td>
                                      <td>
                                        <h4
                                          class="font-medium text-red-500 mt-3"
                                        >
                                          ${{ fur.cost }}
                                        </h4>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <hr class="my-3 h-px text-slate-300" />
                                <div class="flex">
                                  <div class="m-t-sm my-2 ml-2">
                                    <div
                                      class="flex gap-x-2"
                                      data-toggle="modal"
                                      data-target="#exampleModalLong"
                                      data-backdrop="false"
                                      @click="opentModalOrder('detail', or)"
                                    >
                                      <i
                                        class="fa-solid fa-circle-info text-sm"
                                      ></i>
                                      <span class="font-medium text-sm"
                                        >Detail</span
                                      >
                                    </div>
                                    <modal
                                      v-if="modalType == 'detail'"
                                      @close="closeModal"
                                      data-target="#myModal"
                                    >
                                      <template v-slot:title>
                                        <h5
                                          class="modal-title font-medium"
                                          id="exampleModalLabel"
                                        >
                                          Detail Order Transport
                                        </h5>
                                      </template>
                                      <template v-slot:body>
                                        <div class="invoice mt-2">
                                          <span class="font-weight-bold d-block"
                                            >Infromation</span
                                          >
                                          <div class="py-2">
                                            <span
                                              class="d-inlineblock pr-3 text-red-500"
                                              ><i
                                                class="fa-solid fa-location-dot pr-1"
                                              ></i>
                                              Shiping Address:</span
                                            >
                                            <span>12 Me Tri- Ha Noi</span>
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
                                                    <div class="py-2">
                                                      <span class="mr-3"
                                                        >Order Id</span
                                                      >
                                                      <span>{{
                                                        orderModel.orderId
                                                      }}</span>
                                                    </div>
                                                  </td>
                                                  <td>
                                                    <div class="py-2">
                                                      <span
                                                        class="d-block text-muted"
                                                        >Payment</span
                                                      >
                                                      <span
                                                        ><img
                                                          class="w-1/12"
                                                          v-if="
                                                            orderModel.paymentMethod ===
                                                            'VNPAYQR'
                                                          "
                                                          src="@/assets/images/payment_method/bank.png"
                                                          alt="image"
                                                        />
                                                        <img
                                                          class="w-1/12"
                                                          v-if="
                                                            orderModel.paymentMethod ===
                                                            'VNPAY'
                                                          "
                                                          src="@/assets/images/payment_method/vnpay.png"
                                                          alt="image"
                                                        />
                                                      </span>
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
                                              <tbody
                                                v-for="fur in orderModel.furniture"
                                                :key="fur.furnitureId"
                                              >
                                                <tr>
                                                  <td width="20%">
                                                    <img
                                                      src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                      width="90"
                                                    />
                                                  </td>

                                                  <td width="60%">
                                                    <span
                                                      class="font-weight-bold"
                                                    >
                                                      {{
                                                        fur.furnitureSpecificationname
                                                      }}</span
                                                    >
                                                    <div class="product-qty">
                                                      <span class="d-block"
                                                        >Quantity:{{
                                                          fur.quantity
                                                        }}</span
                                                      >
                                                    </div>
                                                  </td>
                                                  <td width="20%">
                                                    <div class="text-right">
                                                      <span
                                                        class="font-weight-bold"
                                                        >${{ fur.cost }}</span
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
                                            <div class="col-md-5">
                                              <table
                                                class="table table-borderless"
                                              >
                                                <tbody class="totals">
                                                  <tr>
                                                    <td>
                                                      <div class="text-left">
                                                        <span class="text-muted"
                                                          >Shipping Fee</span
                                                        >
                                                      </div>
                                                    </td>
                                                  </tr>

                                                  <tr
                                                    class="border-top border-bottom"
                                                  >
                                                    <td>
                                                      <div class="text-left">
                                                        <span
                                                          class="font-weight-bold"
                                                          >Subtotal</span
                                                        >
                                                      </div>
                                                    </td>
                                                    <td>
                                                      <div class="text-right">
                                                        <span
                                                          class="font-weight-bold"
                                                          >${{
                                                            orderModel.totalCost
                                                          }}</span
                                                        >
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                          <p class="font-weight-bold mb-0">
                                            Thanks for shopping with us!
                                          </p>
                                        </div>
                                      </template>
                                      <template v-slot:footer> </template>
                                    </modal>
                                  </div>

                                  <div class="flex gap-x-4 absolute right-40">
                                    <span class="font-semibold mt-1"
                                      >Total Cost:
                                    </span>
                                    <span
                                      class="font-medium text-xl text-red-500"
                                      >${{ or.totalCost }}</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="cancel"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="wishlist">
                <div class="form bg-white">
                  <div class="flex"></div>
                  <h1
                    class="py-3 font-semibold text-base pl-10 text-yellow-950"
                  >
                    All Guarantee
                  </h1>
                  <!-- <all-furniture
                    v-if="wishlist.length"
                    :furnitures="wishlist"
                  ></all-furniture> -->
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="feedback">
                <div class="form bg-white">
                  <div class="flex">
                    <h1
                      class="py-3 font-semibold text-base pl-10 text-yellow-950"
                    >
                      All Feedback
                    </h1>
                    <div class="absolute right-36 flex gap-x-3">
                      <span
                        class="py-3 font-medium text-sm pl-10 text-yellow-950"
                      >
                        Total Feefack:
                      </span>
                      <span
                        class="font-medium flex items-center text-yellow-950"
                        >{{ feedbacks.length }}</span
                      >
                    </div>
                  </div>
                  <!-- <div class="feedbacks.length">
                    <div v-for="fb in feedbacks" :key="fb" class="py-3">
                      <div class="text-xl font-bold">
                        {{ fb.furnitureName }}
                      </div>
                      <div class="">
                        <div class="rating">
                          <input
                            value="5"
                            name="rate"
                            id="star5"
                            type="radio"
                          />
                          <label title="text" for="star5"></label>
                          <input
                            value="4"
                            name="rate"
                            id="star4"
                            type="radio"
                          />
                          <label title="text" for="star4"></label>
                          <input
                            value="3"
                            name="rate"
                            id="star3"
                            type="radio"
                            checked=""
                          />
                          <label title="text" for="star3"></label>
                          <input
                            value="2"
                            name="rate"
                            id="star2"
                            type="radio"
                          />
                          <label title="text" for="star2"></label>
                          <input
                            value="1"
                            name="rate"
                            id="star1"
                            type="radio"
                          />
                          <label title="text" for="star1"></label>
                        </div>
                      </div>
                      <div class="">{{ fb.content }}</div>
                      <div
                        class=""
                        v-for="urlFeed in fb.feedbackImages"
                        :key="urlFeed"
                      >
                        <img :src="url" />
                      </div>
                    </div>
                  </div> -->
                  <div
                    class="border-dotted border-1 border-indigo-gray opacity-20"
                  ></div>

                  <div class="px-10 py-6">
                    <div v-for="f in feedbacks" :key="f">
                      <div>
                        <div class="text-gl font-semibold">
                          {{ f.furnitureName }}
                        </div>
                        <div class="absolute left-54 mb-4">
                          <div class="rating">
                            <!-- <input
                              :id="'star' + f.voteStar"
                              name="rate"
                              type="radio"
                              :value="f.voteStar"
                            />
                            <label
                              :for="'star' + f.voteStar"
                              class="star-label"
                            ></label> -->
                            <div class="rating">
                              <input
                                value="5"
                                name="rate"
                                id="star5"
                                type="radio"
                              />
                              <label title="text" for="star5"></label>
                              <input
                                value="4"
                                name="rate"
                                id="star4"
                                type="radio"
                              />
                              <label title="text" for="star4"></label>
                              <input
                                value="3"
                                name="rate"
                                id="star3"
                                type="radio"
                                checked=""
                              />
                              <label title="text" for="star3"></label>
                              <input
                                value="2"
                                name="rate"
                                id="star2"
                                type="radio"
                              />
                              <label title="text" for="star2"></label>
                              <input
                                value="1"
                                name="rate"
                                id="star1"
                                type="radio"
                              />
                              <label title="text" for="star1"></label>
                            </div>
                          </div>
                        </div>
                        <div class="font-medium text-sm mt-10">
                          {{ f.content }}
                        </div>
                        <div
                          class="grid grid-cols-5 gap-x-5 mt-3"
                          v-for="img in f.feedbackImages"
                          :key="img"
                        >
                          <img
                            class="rounded-full w-3/12 cursor-pointer"
                            :src="img.url"
                            alt="img"
                          />
                          <!-- <img
                            class="rounded-md w-6/12 cursor-pointer"
                            src="@/assets/images/category/bed/bed_8.png"
                            alt="img"
                          /> -->
                        </div>
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
                    All Guarantee
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
                <div class="form bg-white"></div>
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
              <div role="tabpanel" class="tab-pane" id="customize">
                <div class="">
                  <div class="group-tabs ml-2">
                    <!-- Nav tabs -->
                    <div class="nav-order">
                      <ul
                        class="nav nav-pills bg-white flex gap-x-52 pl-20 py-3 text-base font-medium"
                        role="tablist"
                      >
                        <!-- <li role="presentation" class="active">
                          <a
                            href="#all"
                            aria-controls="all"
                            role="tab"
                            data-toggle="tab"
                            >All</a
                          >
                        </li> -->
                        <!-- <li role="presentation">
                          <a
                            href="#all"
                            aria-controls="all"
                            role="tab"
                            data-toggle="tab"
                            >Accepted</a
                          >
                        </li>
                        <li role="presentation">
                          <a
                            href="#all"
                            aria-controls="all"
                            role="tab"
                            data-toggle="tab"
                            >Rejected</a
                          >
                        </li> -->

                        <li @click="selectStatus('All')" class="active">All</li>
                        <li @click="selectStatus('Accepted')">Accepted</li>
                        <li @click="selectStatus('Rejected')">Rejected</li>
                        <li @click="selectStatus('Pending')">Pending</li>
                      </ul>
                    </div>
                    <div
                      @click="HandleCheckOut"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-backdrop="false"
                      class="bg-slate-700 px-2 text-white rounded-md text-sm cursor-pointer w-2/12 right-40 text-center my-4 py-2"
                    >
                      Check Out
                    </div>
                    <modal
                      v-if="modalType == 'orderCustomize'"
                      @close="closeModal"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div>
                          <h1 class="font-semibold text-lg">Check Out</h1>
                        </div>
                      </template>
                      <template v-slot:body>
                        <div class="mt-1 mb-2" v-if="order">
                          <div class="bg-white rounded-md px-3 py-2 text-left">
                            <span
                              class="text-red-600 font-medium text-sm text-left"
                              ><i class="fa-solid fa-location-dot"></i>
                              Address</span
                            >
                            <br />
                            <div class="py-2 flex gap-x-4">
                              <span
                                v-if="adChange"
                                class="font-semibold text-sm"
                                >{{ order.deliveryAddress }}
                              </span>
                              <span v-else class="font-semibold text-sm"
                                >{{ adChange.street }} {{ adChange.ward }}
                                {{ adChange.district }}
                                {{ adChange.provine }}
                              </span>
                              <div class="text-sm">
                                <div class="span_address">
                                  <div class="">
                                    <span
                                      class="px-2 py-1 font-medium text-red-600 text-xs"
                                      >Default</span
                                    >
                                  </div>
                                </div>
                              </div>
                              <div
                                class="font-semibold text-amber-900 cursor-pointer"
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                @click="opentModal('address')"
                              >
                                Change
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bg-white rounded-md px-3 pt-2">
                          <div>
                            <div>
                              <div class="card mb-3">
                                <div class="card-body">
                                  <div class="d-flex justify-content-between">
                                    <div
                                      class="d-flex flex-row align-items-center"
                                    >
                                      <div>
                                        <img
                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                          class="img-fluid rounded-3"
                                          alt="Shopping item"
                                          style="width: 65px"
                                        />
                                      </div>
                                      <div class="ms-3">
                                        <h5>
                                          {{ order.customizeFurnitureName }}
                                        </h5>
                                      </div>
                                    </div>
                                    <div
                                      class="d-flex flex-row align-items-center"
                                    >
                                      <div style="width: 50px">
                                        <h5 class="fw-normal mb-0">
                                          x{{ order.quantity }}
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card bg-white rounded-md px-3 py-2 my-3 mx-3"
                        >
                          <div class="flex gap-x-1 mt-3 mb-3">
                            <span class="font-medium label_payment mt-2 mr-3"
                              >Point</span
                            >
                            <div class="input-group">
                              <input
                                v-model="userpoint"
                                type="text"
                                class="form-control border border-slate-200"
                                aria-label="Dollar amount (with dot and two decimal places)"
                                :maxlength="info.point"
                              />
                              <span class="input-group-text">
                                <i
                                  class="bi bi-currency-dollar text-yellow-500 text-sm"
                                ></i
                              ></span>
                              <span class="input-group-text">{{
                                info.point
                              }}</span>
                            </div>
                          </div>

                          <div class="">
                            <div
                              class="d-flex justify-content-between align-items-center mb-4"
                            >
                              <h5 class="label_payment mb-0 font-medium mt-2">
                                Payment Method
                              </h5>
                            </div>

                            <div>
                              <div>
                                <select
                                  v-if="order.payments"
                                  v-model="paymentId"
                                  class="form-select text-sm border border-slate-200"
                                  aria-label="Default select example"
                                >
                                  <option selected>Choose Payment</option>

                                  <option
                                    v-for="md in order.payments"
                                    :key="md"
                                    :value="md.paymentId"
                                  >
                                    {{ md.paymentMethod }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="">
                              <div
                                class="d-flex justify-content-between align-items-center mb-4"
                              >
                                <h5 class="label_payment mb-0 font-medium mt-2">
                                  Delivery Method
                                </h5>
                              </div>

                              <div>
                                <div>
                                  <select
                                    v-model="delivery"
                                    class="form-select text-sm border border-slate-200"
                                    aria-label="Default select example"
                                    @change="CalculateDeliveryFee"
                                  >
                                    <option selected>Choose Delivery</option>
                                    <option
                                      v-for="ship in methodDelevery.data"
                                      :key="ship"
                                      :value="ship.service_id"
                                    >
                                      {{ ship.short_name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div
                              class="grid grid-cols-6 gap-4 rounded-xl text-sm pb-3"
                            >
                              <label class="label_payment">Note</label>
                              <textarea
                                v-model="note"
                                placeholder="Your note..."
                                class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="absolute right-8 flex gap-x-10">
                          <p class="text-sm">Shipping Fee</p>
                          <p class="text-sm">${{ shipCost }}</p>
                        </div>
                        <br />
                        <div class="absolute right-8 flex gap-x-10 mt-6">
                          <p class="text-sm">Point</p>
                          <p class="text-sm">{{ userpoint }}</p>
                        </div>
                        <br />
                        <div class="absolute right-8 flex gap-x-10 mt-10">
                          <p class="text-sm">Subtotal</p>
                          <p class="text-sm">${{ order.totalCost }}</p>
                        </div>
                        <div class="d-flex justify-content-between mt-20 px-4">
                          <p class="font-semibold text-base">Subtotal</p>
                          <p class="font-bold text-base text-red-600">
                            ${{ totalCost }}
                          </p>
                        </div>
                      </template>
                      <template v-slot:footer>
                        <button
                          @click="HandleOrder(order)"
                          data-dismiss="modal"
                          class="ml-3 my-4 text-center px-4 py-2 text-white hover:ring-offset-2 hover:ring-2 bg-slate-600 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                        >
                          Order
                        </button>
                      </template>
                    </modal>
                    <modal
                      v-if="modalType == 'address'"
                      @close="closeModal"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div
                          class="flex items-center text-base font-semibold text-yellow-950"
                        >
                          All Address
                        </div>
                      </template>
                      <template v-slot:body>
                        <div class="py-3" v-if="address.length">
                          <div
                            class="flex gap-x-2 py-3"
                            v-for="ad in address"
                            :key="ad.id"
                          >
                            <div class="flex gap-x-1">
                              <input
                                v-model="ad.addressChange"
                                @change="changeAddress(ad)"
                                class="w-px/12"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <span
                                class="span_address font-medium list-decimal"
                                >{{ ad.street }} {{ ad.ward }}
                                {{ ad.district }} {{ ad.provine }}</span
                              >
                            </div>
                            <div
                              v-if="ad.addressType === 'DEFAULT'"
                              class="span_address"
                            >
                              <div
                                class="border-solid border-2 border-red-600 rounded-full"
                              >
                                <span
                                  class="px-2 py-1 font-medium text-red-600 text-xs"
                                  >Default</span
                                >
                              </div>
                            </div>
                            <div class="absolute right-4 flex gap-x-5">
                              <button
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                data-backdrop="false"
                                @click="opentModal('editAddress', ad)"
                                class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-slate-600 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                              >
                                Edit
                              </button>
                              <button
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                data-backdrop="false"
                                @click="opentModal('deleteAddress', ad)"
                                class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-red-600 hover:ring-red-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-slot:footer>
                        <button
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          data-backdrop="false"
                          @click="confirmChangeAddress"
                          class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-red-600 hover:ring-red-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                        >
                          Confirm
                        </button>
                      </template>
                    </modal>
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
                              v-model="addressModal.street"
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
                              v-model="addressModal.ward"
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
                              v-model="addressModal.district"
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
                              v-model="addressModal.provine"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="addressModal.type"
                        >
                          <option selected>{{ addressModal.type }}</option>
                          <option value="DEFAULT">Default</option>
                          <option value="HOME">Home</option>
                        </select>
                      </template>
                      <template v-slot:footer
                        ><div class="bg-yellow-900 rounded-md">
                          <span
                            type="button"
                            class="px-2 py-2 text-white"
                            @click.prevent="HandleUpdateAddress()"
                          >
                            Update
                          </span>
                        </div></template
                      >
                    </modal>
                    <modal
                      v-if="modalType == 'deleteAddress'"
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
                          <b>
                            {{ addressModal.street }} {{ addressModal.ward }}
                            {{ addressModal.district }}
                            {{ addressModal.provine }} ?</b
                          >
                        </p>
                      </template>
                      <template v-slot:footer>
                        <div class="bg-red-900 rounded-md">
                          <span
                            type="button"
                            class="px-2 py-2 text-white"
                            data-dismiss="modal"
                            @click="HandleDelete()"
                          >
                            Delete
                          </span>
                        </div>
                      </template>
                    </modal>
                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div
                        role="tabpanel"
                        class="tab-pane active"
                        id="all"
                        v-if="customizeOders.length"
                      >
                        <div class="">
                          <div
                            clas="product"
                            v-for="or in customizeOders"
                            :key="or.customizeFurnitureId"
                          >
                            <div class="ibox-content mt-3 rounded-md shadow-sm">
                              <div class="text-sm flex flex-cols-2">
                                <div
                                  class="font-medium text-slate-600 text-xs mt-1"
                                  v-if="or.result.status === 'Accepted'"
                                >
                                  This order has been confirmed by the shop
                                </div>
                                <div
                                  class="font-medium text-slate-600 text-xs mt-1"
                                  v-if="or.result.status === 'Pending'"
                                >
                                  This order is under review by the store
                                </div>
                                <div class="absolute right-36 flex gap-x-4">
                                  <div class="order_status">
                                    <div
                                      v-if="or.result.status === 'Pending'"
                                      class="bg-yellow-600 px-2 py-1 text-white rounded-md text-sm"
                                    >
                                      Pending
                                    </div>
                                    <div
                                      v-if="or.result.status === 'Accepted'"
                                      class="bg-lime-700 px-2 py-1 text-white rounded-md text-sm"
                                    >
                                      Accepted
                                    </div>
                                    <div
                                      v-if="or.status === 'Preparing'"
                                      class="bg-red-600 px-2 py-1 text-white rounded-md text-sm"
                                    >
                                      Preparing
                                    </div>
                                    <div
                                      v-if="or.status === 'Delivering'"
                                      class="bg-red-600 px-2 py-1 text-white rounded-md text-sm"
                                    >
                                      Delivering
                                    </div>
                                    <div
                                      v-if="or.status === 'Delivered'"
                                      class="bg-red-600 px-2 py-1 text-white rounded-md text-sm"
                                    >
                                      Delivered
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="mt-4 mb-2 h-px text-slate-300" />
                              <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                  <tbody>
                                    <tr>
                                      <td
                                        v-if="or.result.status === 'Accepted'"
                                      >
                                        <div class="mt-14">
                                          <input
                                            type="checkbox"
                                            id="checkbox"
                                            v-model="or.isSelected"
                                            @change="handleCartId(or)"
                                          />
                                        </div>
                                      </td>
                                      <td width="90">
                                        <div
                                          class="cart-product-imitation mt-3"
                                        >
                                          <img
                                            src="@/assets/images/category/shelves_tv/shelves_11.png"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td class="desc">
                                        <h3 class="mb-2 break-all">
                                          <span class="text-navy font-bold">
                                            {{ or.customizeFurnitureName }}
                                          </span>
                                        </h3>
                                        <h3 class="pt-1">
                                          <div class="specificationname">
                                            <span
                                              class="font-semibold info_customizeOrder"
                                            >
                                              Height:
                                            </span>
                                            <span
                                              class="font-medium info_customizeOrder"
                                            >
                                              {{ or.height }}m
                                            </span>
                                          </div>
                                        </h3>
                                        <h3 class="pt-1">
                                          <div class="specificationname">
                                            <span
                                              class="font-semibold info_customizeOrder"
                                            >
                                              Width:
                                            </span>
                                            <span
                                              class="font-medium info_customizeOrder"
                                            >
                                              {{ or.width }}m
                                            </span>
                                          </div>
                                        </h3>
                                        <h3 class="pt-1">
                                          <div class="specificationname">
                                            <span
                                              class="font-semibold info_customizeOrder"
                                            >
                                              Length:
                                            </span>
                                            <span
                                              class="font-medium info_customizeOrder"
                                            >
                                              {{ or.length }}m
                                            </span>
                                          </div>
                                        </h3>

                                        <h3 class="pt-1">
                                          <div class="specificationname">
                                            <span
                                              class="font-semibold info_customizeOrder"
                                            >
                                              Desired Completion Date:
                                            </span>
                                            <span
                                              class="font-medium info_customizeOrder"
                                            >
                                              {{ or.desiredCompletionDate }}
                                            </span>
                                          </div>
                                        </h3>
                                      </td>
                                      <td>
                                        <h3>
                                          <div class="specificationname">
                                            <span
                                              class="font-semibold info_customizeOrder"
                                            >
                                              Color:
                                            </span>
                                            <span
                                              class="font-medium info_customizeOrder"
                                            >
                                              {{ or.color }}
                                            </span>
                                          </div>
                                        </h3>
                                      </td>
                                      <td>
                                        <h3>
                                          <div class="specificationname">
                                            <span
                                              class="font-semibold info_customizeOrder"
                                            >
                                              Wood:
                                            </span>
                                            <span
                                              class="font-medium info_customizeOrder"
                                            >
                                              {{ or.wood }}
                                            </span>
                                          </div>
                                        </h3>
                                      </td>
                                      <td
                                        width="65"
                                        class="font-semibold text-center"
                                      >
                                        <div class="flex">
                                          <label
                                            class="quantity font-meidum info_customizeOrder mr-1"
                                            >Quantity:</label
                                          >
                                          <span
                                            class="font-medium info_customizeOrder text-sm mt-1"
                                            >x{{ or.quantity }}</span
                                          >
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <hr class="my-3 h-px text-slate-300" />
                                <div class="flex">
                                  <div class="m-t-sm my-2 ml-2">
                                    <div
                                      class="date_orderCustomize text-xs font-medium text-slate-600"
                                    >
                                      Date: {{ or.creationDate }}
                                    </div>
                                  </div>
                                  <div
                                    class="flex gap-x-2 absolute right-40 mt-1 cursor-pointer"
                                    data-toggle="modal"
                                    data-target="#exampleModalLong"
                                    data-backdrop="false"
                                    @click="opentModalOrder('result', or)"
                                  >
                                    <i
                                      class="bi bi-check-square text-sm text-red-700"
                                    ></i>
                                    <span
                                      class="font-medium text-sm text-red-700"
                                      >Detailed Response</span
                                    >
                                  </div>
                                  <modal
                                    v-if="modalType == 'result'"
                                    @close="modalType == null"
                                    data-target="#myModal"
                                  >
                                    <template v-slot:title>
                                      <h5
                                        class="modal-title font-semibold px-2"
                                        id="exampleModalLabel"
                                      >
                                        Detailed Response
                                      </h5>
                                    </template>
                                    <template v-slot:body>
                                      <div class="px-2">
                                        <div class="py-2">
                                          <span
                                            class="font-semibold mt-1 mr-2 text_customize detail_response"
                                            >Reason:</span
                                          >
                                          <span
                                            class="font-medium mb-0 text_customize mt-4 text-zinc-600"
                                            >{{
                                              customizeModal.result.reason
                                            }}</span
                                          >
                                        </div>
                                        <div class="py-2">
                                          <span
                                            class="font-semibold mt-1 mr-2 text_customize detail_response"
                                            >Expected Price:</span
                                          >
                                          <span
                                            class="font-medium text-red-600 text_customize"
                                            >${{
                                              customizeModal.result
                                                .expectedPrice
                                            }}</span
                                          >
                                        </div>
                                        <div class="py-2">
                                          <span
                                            class="font-semibold mt-1 mr-2 text_customize detail_response"
                                            >Actual Completion Date:</span
                                          >
                                          <span
                                            class="font-medium text_customize text-zinc-600"
                                          >
                                            {{
                                              customizeModal.result
                                                .actualCompletionDate
                                            }}</span
                                          >
                                        </div>
                                        <p
                                          class="font-weight-bold mb-0 text_customize mt-4"
                                        >
                                          Thanks for shopping with us!
                                        </p>
                                      </div>
                                    </template>
                                    <template v-slot:footer></template>
                                  </modal>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div
                        role="tabpanel"
                        class="tab-pane"
                        id="transport"
                      ></div>
                      <div
                        role="tabpanel"
                        class="tab-pane"
                        id="completed"
                      ></div>
                      <div role="tabpanel" class="tab-pane" id="cancel"></div>
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
</template>

<script>
import axios from "axios";
import { format } from "date-fns";
import modal from "@/components/ModalPage.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import alertWanning from "@/components/AlertWanning.vue";
// import AllFurniture from "./AllFurniture.vue";

export default {
  components: {
    modal,
    // AllFurniture,
    alertError,
    alertSuccess,
    alertWanning,
  },
  data() {
    return {
      info: {},
      orderAll: [],
      orderPending: [],
      address: [],
      orderDeliveried: [],
      orderDelivering: [],
      wishlist: [],
      warranties: [],
      customizeOders: [],
      adChange: {},
      arrayUrl: [],
      feedbacks: [],
      provinces: {},
      avatar: "",
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
      url: "",
      updateInfo: {},
      nameFile: {},
      file: "",
      DoB: "",
      statusOrder: "",
      type: "",
      orderModel: {},
      customizeModal: {},
      addressModal: {},
      arrayFile: [],
      provinceName: [],
      districts: {},
      ward: {},
      inputProvince: "",
      inputDistrict: "",
      inputWard: "",
      customizeFurnitureIdList: [],
      furnitureOrder: [],
      shipFee: "",
      provinceCode: "",
      districtCode: "",
      wardCode: "",
      methodShip: [],
      methodDelevery: [],
      shipCost: 0,
      userpoint: 0,
      note: "",
      shipfee: 0,
      order: "",
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
    this.getFeedback();
    this.getOrderDelivering();
    this.getProvices();
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
    async getOrderDelivering() {
      try {
        const response = await axios.get(
          "customer/get-order?status=Delivering"
        );
        this.orderDelivering = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getProvices() {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
          }
        );

        this.provinces = response.data;
        console.log(this.provinceName);
      } catch (error) {
        console.error(error);
      }
    },
    async handleDistrict(e) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              province_id: this.province,
            },
          }
        );
        this.districts = response.data;
        this.inputProvince =
          e.target.options[e.target.options.selectedIndex].text;
        console.log(this.inputProvince);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async handleWard(e) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              district_id: this.district,
            },
          }
        );
        this.ward = response.data;
        console.log(this.ward);
        this.inputDistrict =
          e.target.options[e.target.options.selectedIndex].text;
        console.log(this.inputDistrict);
      } catch (error) {
        console.error(error);
      }
    },
    HandleChooseWard(e) {
      this.inputWard = e.target.options[e.target.options.selectedIndex].text;
      console.log(this.inputWard);
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
    async handleDisable() {
      try {
        const response = await axios.put(
          "user/individual/disable-account?password=" + this.disablePassword
        );
        if (response.status === 200) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Disable account successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
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
    async handleEnableOtp() {
      try {
        const response = await axios.get(
          "user/individual/enable-account-otp?email=" + this.email
        );
        if (response.status === 200) {
          this.isAlertSuccess = true;
          this.messageSuccess = "Please check your email";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
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
    async handleEnable() {
      try {
        const response = await axios.put(
          "user/individual/enable-account?email=" +
            this.email +
            "&totpCode=" +
            this.otp
        );
        if (response.status === 200) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Disable account successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getInfor();
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
    async getFeedback() {
      try {
        const response = await axios.get("customer/feedbacks");
        this.feedbacks = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    opentModalOrder(type, or) {
      this.modalType = type;
      this.customizeModal = or;
      this.orderModel = or;
    },
    async getCustomizeOrder() {
      try {
        const response = await axios.get(
          "customer/customize-furnitures?status=All"
        );
        if (response.status === 200) {
          this.customizeOders = response.data;
          this.customizeOders = response.data.map((item) => ({
            ...item,
            creationDate: item.creationDate
              ? format(new Date(item.creationDate), "dd/MM/yyyy")
              : "",
            desiredCompletionDate: item.desiredCompletionDate
              ? format(new Date(item.desiredCompletionDate), "dd/MM/yyyy")
              : "",
            actualCompletionDate: item.result.actualCompletionDate
              ? format(new Date(item.result.actualCompletionDate), "dd/MM/yyyy")
              : "",
          }));
        }
      } catch (error) {
        console.error(error);
      }
    },
    handleCartId(or) {
      if (or.isSelected) {
        this.furnitureOrder.push(or.customizeFurnitureId);
        this.customizeFurnitureIdList.push(or.customizeFurnitureId);
      } else {
        this.furnitureOrder.splice(or);
        this.customizeFurnitureIdList.splice(or);
      }
      console.log(this.customizeFurnitureIdList);
    },
    async HandleCheckOut() {
      this.opentModal("orderCustomize");
      this.cartId = "";
      for (let i = 0; i < this.customizeFurnitureIdList.length; i++) {
        if (i === this.customizeFurnitureIdList.length) {
          this.cartId = this.cartId.concat(
            `customizeFurnitureIdList=${this.customizeFurnitureIdList[i]}`
          );
        } else {
          this.cartId = this.cartId.concat(
            `customizeFurnitureIdList=${this.customizeFurnitureIdList[i]}&`
          );
        }
      }
      try {
        const response = await axios.get(
          `customer/checkout-customize-furniture?${this.cartId}`
        );
        if (response.status === 200) {
          this.order = response.data;
          let deliveryAddress = response.data.deliveryAddress;
          let address = deliveryAddress.split(",");
          let ward = address[1].trim();
          let district = address[2].trim();
          let province = address[3].trim();
          await this.getProvinceCode(province);
          await this.getDistrictCode(district);
          await this.getWardCode(ward);
          await this.getAvailableServices();
        }
      } catch (error) {
        console.error(error);
      }
    },
    confirmChangeAddress() {
      this.opentModal("orderCustomize");
    },
    //HàmCheckout
    async getProvinceCode(province) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
          }
        );

        let provinceList = response.data.data;
        let proviceCode = 0;
        for (let i = 0; i < provinceList.length; i++) {
          if (provinceList[i].ProvinceName === province) {
            proviceCode = provinceList[i].ProvinceID;
            break;
          }
        }
        console.log(proviceCode);
        // return proviceCode + "";
        this.provinceCode = proviceCode;
      } catch (error) {
        console.error(error);
      }
    },
    async getDistrictCode(district) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              province_id: this.provinceCode,
            },
          }
        );

        let districtList = response.data.data;
        let districtCode = 0;
        for (let i = 0; i < districtList.length; i++) {
          if (districtList[i].DistrictName === district) {
            districtCode = districtList[i].DistrictID;
            break;
          }
        }
        console.log(districtCode);
        this.districtCode = districtCode;
      } catch (error) {
        console.error(error);
      }
    },
    async getWardCode(ward) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              district_id: this.districtCode,
            },
          }
        );

        let wardList = response.data.data;
        let wardCode = 0;
        for (let i = 0; i < wardList.length; i++) {
          if (wardList[i].WardName === ward) {
            wardCode = wardList[i].WardCode;
            break;
          }
        }
        console.log(wardCode);
        this.wardCode = wardCode;
      } catch (error) {
        console.error(error);
      }
    },
    async getAvailableServices() {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              shop_id: 4710217,
              from_district: 2194,
              to_district: this.districtCode,
            },
          }
        );
        this.methodDelevery = response.data;
        console.log(this.methodDelevery);
      } catch (e) {
        console.error(e);
      }
    },
    async CalculateDeliveryFee(e) {
      let service_id = e.target.value;
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
              shop_id: 4710217,
            },
            params: {
              from_district_id: 2194,
              from_ward_code: "220710",
              service_id: service_id,
              to_district_id: this.districtCode,
              to_ward_code: this.wardCode,
              height: 50,
              length: 20,
              width: 20,
              weight: 50,
              coupon: null,
            },
          }
        );
        this.shipCost = response.data.data.service_fee;
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    },
    async HandleOrder(order) {
      let point = this.userpoint * 100;
      const id = this.addressId || order.deliveryAddressId;
      const itemsArray = order.items.map((item) => ({
        itemId: item.customizeFurnitureId,
        quantity: item.quantity,
      }));
      try {
        const response = await axios.post("customer/order", {
          addressId: id,
          paymentId: this.paymentId,
          usedPoint: point,
          note: this.note,
          total: this.totalCost,
          items: itemsArray,
        });
        if (response.status === 200) {
          if (
            response.data !== null &&
            response.data !== "Order successfully"
          ) {
            this.paymentOline = response.data;
            window.location.href = this.paymentOline;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    async HandleCancelOrder(id) {
      try {
        await axios.put("customer/cancel-order?orderId=" + id);
      } catch (error) {
        console.error(error);
      }
    },
    opentModal(type, ad) {
      this.modalType = type;
      this.addressModal = ad;
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
    async HandleDelete() {
      try {
        const response = await axios.delete(
          "user/customer-infor/address/remove/" + this.addressModal.id
        );
        if (response.status === 200) {
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
      formData.append("Ward", this.inputWard);
      formData.append("District", this.inputDistrict);
      formData.append("Provine", this.inputProvince);
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
        if (response.status === 200) {
          this.isAlertSuccess = true;
          this.messageSuccess = "Add new successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAddress();
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
    onFile(event) {
      this.arrayFile = event.target.files;
      if (this.arrayFile) {
        for (let i = 0; i < event.target.files.length; i++) {
          this.url = URL.createObjectURL(event.target.files[i]);
          this.arrayUrl.push(this.url);
        }
      }
    },
    HandleRemoveImage(url) {
      this.arrayUrl = this.arrayUrl.filter((item) => item !== url);
    },
    async CreateGuarantee() {
      console.log("Đã cho image vào array");
      const formData = new FormData();
      formData.append("orderId", this.orderModel.orderId);
      formData.append("warrantyReasons", this.reason);
      if (this.arrayFile.length > 0) {
        for (var i = 0; i < this.arrayFile.length > 0; i++) {
          formData.append("uploadFiles", this.arrayFile[i]);
        }
      }
      console.log("Đã sua cho ban minh vào array");
      try {
        const response = await axios.post(
          "customer/warranties/create",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          alert("Create guarantee success!");
        }
        console.log("This arrayFile", this.arrayFile);
      } catch (error) {
        console.log("This arrayFile", this.file);
        this.message = error.response.data.message;
        console.error(error.response.data.message);
      }
    },
    async HandleFeedback() {
      console.log("Đã cho image vào array");
      const formData = new FormData();
      formData.append("orderId", this.orderModel.orderId);
      formData.append("furnitureSpecificationId", this.furSpeFeedback);
      formData.append("content", this.content);
      formData.append("voteStar", this.star);
      formData.append("anonymous", this.anonymous);
      if (this.arrayFile.length > 0) {
        for (var i = 0; i < this.arrayFile.length > 0; i++) {
          formData.append("files", this.arrayFile[i]);
        }
      }
      console.log(this.arrayFile);
      try {
        const response = await axios.post(
          "customer/create-feedback",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          alert("Create guarantee success!");
        }
      } catch (error) {
        console.log("This arrayFile", this.arrayFile);
        this.message = error.response.data.message;
        console.error(error.response.data.message);
      }
    },
    async HandleToggole2fa() {
      try {
        const response = await axios.put("user/individual/toggle-2fa");
        if (response.status === 200) {
          this.isAlertSuccess = true;
          this.messageSuccess = response.data;
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
        }
      } catch (error) {
        this.message = error.response.data.message;
        console.error(error.response.data.message);
      }
    },
  },
  computed: {
    totalCost() {
      let point = this.userpoint * 100;
      console.log(this.order.totalCost);
      let sum = this.order.totalCost + this.shipCost - point;
      let cost = parseFloat(sum.toFixed(2));
      return cost;
    },
  },
};
</script>

<style scoped>
.profile_customer {
  background: #eaedf330;
}
.view-account {
  margin-top: 17px;
  margin-bottom: 2em;
}

.side-bar {
  box-shadow: 1px 1px 3px #ccc7c7;
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
  color: #37393d;
}
.nav.nav-pills > li.active a {
  color: #bc874b;
  border-bottom: 2px solid #bc874b;
  background: none;
  border-right: none;
}
.view-account .side-bar .side-menu .nav > li.active a {
  color: #a67640;
  border-bottom: 2px solid #9f7142;
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
    border-right: 4px solid #9f7142;
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
  padding: 16px 25px 1px 25px;
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
.form-control,
.add_address .form-select {
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
  border: 1px solid rgb(240 239 239);
}
.moon h1 {
  border-bottom: 1px solid #dcdbdb;
}
.moon .view-account .side-bar .side-menu .nav > li.active a {
  background: #504f4c;
  border-right: 4px solid #a67640;
  color: white;
}
.avatar_upload {
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
  border-radius: 7px;
  box-shadow: 1px 1px 3px #c0c0c0;
}
.table-responsive {
  overflow-x: auto;
  overflow-y: hidden;
}
.text-navy {
  color: #6c5935;
}
.quantity {
  font-size: 14px;
  margin-top: 3px;
}
.nav-order .nav.nav-pills li {
  margin-left: 2.1em;
}
.info_customizeOrder {
  font-size: 13px;
  color: #4d525e;
}
.text_customize {
  font-size: 15px;
}

/* Updload image */
.custum-file-upload {
  height: 180px;
  width: 270px;
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

/* voteStar */
.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 24px;
  color: #666;
}

.rating:not(:checked) > label:before {
  content: "★";
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}
.total_cost_order {
  font-size: 14px;
}
.orderId {
  font-size: 12px;
}
.detail_response {
  color: #4d525e;
}
.form-select.address {
  background-color: #e8eef387;
}
option {
  text-transform: capitalize;
}
#customize .form-control,
#customize .form-selected {
  background-color: rgb(238 238 243 / 58%);
}
</style>
