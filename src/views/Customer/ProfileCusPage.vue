<template>
  <!-- <div v-if="customer / customer - infor"> -->
  <div class="profile_customer">
    <div class="nav pt-36 mb-2 max-md:pt-24">
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
                            <div class="px-1 text-sm mx-3">
                              <span
                                v-if="!messageOtp"
                                class="success text-sm text-gray-700"
                              >
                                {{ messageOtp }}
                              </span>
                              <span v-else class="text-sm text-red-800 my-2"
                                >Enter your new phone, then check Otp on your
                                phone</span
                              >
                              <label
                                for="exampleInputEmail1"
                                class="mt-3 col-span-4 form-label text-semibold font-base pt-2 border-none"
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
                                  class="col-span-4 form-label text-semibold font-base pt-2 border-none mt-4"
                                  >Verification Code</label
                                >
                              </div>
                              <div class="mt-3 flex gap-x-3 mb-3">
                                <input
                                  v-model="otp"
                                  type="text"
                                  class="form-control"
                                  id="exampleInpuName1"
                                  aria-describedby="nameHelp"
                                  required
                                />
                                <div class="bg-slate-400 rounded-md">
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
                        >Old Password</label
                      >
                      <div class="col-lg-8">
                        <input
                          v-model="oldPassword"
                          type="text"
                          class="form-control border-none bg-neutral-100"
                          id="firstname"
                          aria-describedby="firstnameHelp"
                        />
                      </div>
                    </div>
                    <div class="row mb-6">
                      <label class="col-lg-4 col-form-label fw-medium"
                        >New Password</label
                      >
                      <div class="col-lg-8">
                        <input
                          v-model="newPassword"
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
                            <option disabled>Set as Default Address</option>
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
                            <option disabled>Set as Default Address</option>
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
              <div role="tabpanel" class="tab-pane" id="order">
                <div class="">
                  <div class="group-tabs ml-2">
                    <!-- Nav tabs -->
                    <div class="nav-order">
                      <ul
                        class="nav nav-pills bg-white flex gap-x-20 pl-20 py-3 text-base font-medium"
                        role="tablist"
                      >
                        <li
                          role="presentation"
                          class="active"
                          @click="selectStatusOrder('All')"
                        >
                          <a
                            href="#all"
                            aria-controls="all"
                            role="tab"
                            data-toggle="tab"
                            >All</a
                          >
                        </li>
                        <li
                          role="presentation"
                          @click="selectStatusOrder('Pending')"
                        >
                          <a
                            href="#peding"
                            aria-controls="peding"
                            role="tab"
                            data-toggle="tab"
                            >Pending</a
                          >
                        </li>
                        <li
                          role="presentation"
                          @click="selectStatusOrder('Preparing')"
                        >
                          <a
                            href="#preparing"
                            aria-controls="preparing"
                            role="tab"
                            data-toggle="tab"
                            >Preparing</a
                          >
                        </li>
                        <li
                          role="presentation"
                          @click="selectStatusOrder('Delivering')"
                        >
                          <a
                            href="#delivering"
                            aria-controls="delivering"
                            role="tab"
                            data-toggle="tab"
                            >Delivering</a
                          >
                        </li>
                        <li
                          role="presentation"
                          @click="selectStatusOrder('Delivered')"
                        >
                          <a
                            href="#delivered"
                            aria-controls="delivered"
                            role="tab"
                            data-toggle="tab"
                            >Delivered</a
                          >
                        </li>
                        <li
                          role="presentation"
                          @click="selectStatusOrder('Canceled')"
                        >
                          <a
                            href="#cancel"
                            aria-controls="cancel"
                            role="tab"
                            data-toggle="tab"
                            >Canceled</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="tab-content col-span-5 max-md:col-span-3">
                      <div role="tabpanel" class="tab-pane active" id="all">
                        <item-order
                          v-if="orderAll"
                          :orders="orderAll"
                        ></item-order>
                        <loadding v-else />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="peding">
                        <item-order
                          v-if="orderPending.length"
                          :orders="orderPending"
                        ></item-order>
                        <loadding v-else />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="preparing">
                        <item-order
                          v-if="orderPreparing.length"
                          :orders="orderPreparing"
                        ></item-order>
                        <loadding v-else />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="delivering">
                        <item-order
                          v-if="orderDelivering.length"
                          :orders="orderDelivering"
                        ></item-order>
                        <loadding v-else />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="delivered">
                        <item-order
                          v-if="orderDelivered.length"
                          :orders="orderDelivered"
                        ></item-order>
                        <loadding v-else />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="cancel">
                        <item-order
                          v-if="orderCancel.length"
                          :orders="orderCancel"
                        ></item-order>
                        <loadding v-else />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" class="tab-pane" id="wishlist">
                <div class="form bg-white">
                  <div class="flex"></div>
                  <h1 class="py-3 font-semibold text-base pl-10 text-yellow-90">
                    All Wishlist
                  </h1>
                </div>
                <div class="py-8">
                  <div v-if="wishlist.length">
                    <all-furniture :furnitures="wishlist"></all-furniture>
                  </div>
                  <loadding v-else />
                </div>
              </div>
              <div role="tabpanel" class="tab-pane active" id="feedback">
                <div class="form bg-white">
                  <div class="flex">
                    <h1
                      class="py-3 font-semibold text-base pl-10 text-yellow-90"
                    >
                      All Feedback
                    </h1>
                    <div class="absolute right-36 flex gap-x-3">
                      <span
                        class="py-3 font-medium text-sm pl-10 text-yellow-90"
                      >
                        Total Feefack:
                      </span>
                      <span
                        class="font-medium flex items-center text-yellow-90"
                        >{{ feedbacks.length }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="form bg-white card mb-5 mb-xl-10 mt-10">
                  <div v-if="feedbacks.length">
                    <div
                      class="item_warranty flex px-6 py-6 mt-3"
                      v-for="f in feedbacks"
                      :key="f"
                    >
                      <div>
                        <div class="flex gap-x-5 text-sm">
                          <div
                            class="mt-3 w-40"
                            v-for="img in f.feedbackImages"
                            :key="img"
                          >
                            <img
                              class="rounded-md w-12/12 cursor-pointer bg-slate-200"
                              :src="img.url"
                              alt="img"
                            />
                          </div>
                          <div class="flex gap-x-24 items-center">
                            <div class="leading-10">
                              <div class="flex gap-x-3">
                                <h4 class="font-semibold">Furniture Name:</h4>
                                <h4 class="block font-medium">
                                  {{ f.furnitureName }}
                                </h4>
                              </div>
                              <div class="flex gap-x-2 mt-3">
                                <h4 class="block font-medium text-yellow-950">
                                  {{ f.content }}
                                </h4>
                              </div>
                              <div class="flex gap-x-2 mt-3">
                                <h4 class="block font-semibold text-yellow-950">
                                  Vote Star:
                                </h4>
                                <div class="flex gap-x-1">
                                  <h4
                                    class="block font-semibold text-yellow-950"
                                  >
                                    {{ f.voteStar }}
                                  </h4>
                                  <i
                                    class="bi bi-star-fill text-yellow-500 flex items-top mt-px"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <div class="absolute right-10 flex gap-x-5">
                              <button
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                data-backdrop="false"
                                @click="opentModal('editFeedback', f)"
                                class="px-3 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-slate-600 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                              >
                                Edit
                              </button>
                            </div>
                            <modal
                              v-if="modalType == 'editFeedback'"
                              @close="modalType == null"
                              data-target="#myModal"
                            >
                              <template v-slot:title>
                                <div
                                  class="flex items-center text-lg font-semibold"
                                >
                                  Edit Feedback
                                </div>
                              </template>
                              <template v-slot:body>
                                <div
                                  class="bg-white grid grid-cols-6 gap-2 rounded-xl p-2 text-sm"
                                >
                                  <label
                                    class="text-sm font-semibold text-yellow-950"
                                    >Content</label
                                  >
                                  <textarea
                                    v-model="feedbackModal.content"
                                    placeholder="Your feedback..."
                                    class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                                  ></textarea>
                                </div>
                                <div
                                  class="bg-white flex gap-2 rounded-xl p-2 text-sm mt-3"
                                >
                                  <label
                                    class="font-semibold text-yellow-950 text-sm"
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
                                      class="accent-pink-500 font-semibold text-yellow-950"
                                    />
                                    Anonymous
                                  </label>
                                </div>
                              </template>
                              <template v-slot:footer
                                ><div class="bg-yellow-900 rounded-md">
                                  <span
                                    type="button"
                                    data-dissmis="modal"
                                    class="px-2 py-2 text-white"
                                    @click.prevent="
                                      HandleUpdateFeedback(f.feedbackId)
                                    "
                                  >
                                    Update
                                  </span>
                                </div>
                              </template>
                            </modal>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <loadding v-else />
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="warranty">
                <div class="form bg-white">
                  <div class="flex">
                    <h1
                      class="py-3 font-semibold text-base pl-10 text-yellow-950"
                    >
                      All Guarantee
                    </h1>
                    <div class="absolute right-36 flex gap-x-3">
                      <span
                        class="py-3 font-medium text-sm pl-10 text-yellow-90"
                      >
                        Total Guarantee:
                      </span>
                      <span
                        class="font-medium flex items-center text-yellow-90"
                        >{{ warranties.length }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="form bg-white card mb-5 mb-xl-10 mt-10">
                  <div v-if="warranties.length">
                    <div
                      class="item_warranty flex px-6 py-6 mt-3"
                      v-for="w in warranties"
                      :key="w.warrantyId"
                    >
                      <div>
                        <div class="flex gap-x-16 text-sm">
                          <div
                            v-if="
                              w.attacments.images && w.attacments.images.length
                            "
                            class="w-2/12"
                          >
                            <img
                              :src="w.attacments.images[0].path"
                              alt="images"
                            />
                            <button
                              data-toggle="modal"
                              data-target="#exampleModalLong"
                              data-backdrop="false"
                              class="ml-10 font-medium ring-1 ring-yellow-900 rounded-md px-2 text-xs py-1 mt-3"
                              @click="opentModal('imgWarranty', w)"
                            >
                              See More
                            </button>
                          </div>
                          <loadding v-else />
                          <modal
                            v-if="modalType == 'imgWarranty'"
                            @close="modalType == null"
                            data-target="#myModal"
                          >
                            <template v-slot:title>
                              <div
                                class="flex items-center text-lg font-semibold"
                              >
                                All Image
                              </div>
                            </template>
                            <template v-slot:body>
                              <div
                                v-for="im in warrantyModal.attacments.images"
                                :key="im"
                              >
                                <img :src="im.path" alt="images" />
                              </div>
                            </template>
                          </modal>
                          <div class="flex gap-x-24 items-center">
                            <div class="leading-10">
                              <div class="flex gap-x-3">
                                <h4 class="font-medium">OrderId:</h4>
                                <h4 class="block font-semibold">
                                  {{ w.orderId }}
                                </h4>
                              </div>
                              <div class="flex gap-x-2 mt-2">
                                <h4 class="font-medium">Date:</h4>
                                <h4 class="block font-semibold text-yellow-900">
                                  {{ w.estimatedTime }}
                                </h4>
                              </div>
                              <div class="flex gap-x-2 mt-2">
                                <h4 class="font-medium">Status:</h4>
                                <h4 class="block font-semibold text-yellow-900">
                                  {{ w.status }}
                                </h4>
                              </div>
                              <div class="flex gap-x-2">
                                <span class="font-medium">Reason:</span>
                                <span
                                  class="block font-semibold text-yellow-900"
                                >
                                  {{ w.warrantyReason }}</span
                                >
                              </div>
                            </div>
                            <div class="absolute right-10 flex gap-x-5">
                              <button
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                data-backdrop="false"
                                @click="opentModal('editWarranty', w)"
                                class="px-3 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-slate-600 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                              >
                                Edit
                              </button>
                              <button
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                data-backdrop="false"
                                @click="opentModal('DeleteWarranty', w)"
                                class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-red-600 hover:ring-red-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                              >
                                Delete
                              </button>
                            </div>
                            <modal
                              v-if="modalType == 'editWarranty'"
                              @close="modalType == null"
                              data-target="#myModal"
                            >
                              <template v-slot:title>
                                <div
                                  class="flex items-center text-lg font-semibold"
                                >
                                  Edit Guarantee
                                </div>
                              </template>
                              <template v-slot:body>
                                <div class="row mb-6">
                                  <div class="flex gap-x-6 mt-3">
                                    <label
                                      for="exampleInputEmail1"
                                      class="col-form-label fw-medium"
                                      >Image</label
                                    >
                                    <div
                                      v-if="
                                        warrantyModal.attacments.images.length
                                      "
                                    >
                                      <div v-if="!url">
                                        <div
                                          v-for="img in warrantyModal.attacments
                                            .images"
                                          :key="img"
                                          class="ml-6"
                                        >
                                          <img
                                            :src="img?.path"
                                            alt="image"
                                            class=""
                                            for="imageUpload"
                                          />
                                        </div>
                                      </div>
                                      <img v-else :src="url" alt="image" />
                                    </div>
                                    <div v-else>
                                      <img
                                        v-if="url"
                                        :src="url"
                                        alt="image"
                                        class="w-6/12"
                                      />
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
                                      </label>
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
                                          @change="onFile"
                                        />
                                      </div>
                                      <label
                                        class="bi bi-pencil text-xs"
                                        for="imageUpload"
                                      ></label>
                                    </div>
                                  </div>
                                </div>
                                <div class="row mb-6">
                                  <label
                                    class="col-lg-4 col-form-label fw-medium"
                                    >Warranty Reasons
                                  </label>
                                  <div class="col-lg-8">
                                    <input
                                      v-model="warrantyModal.warrantyReasons"
                                      type="text"
                                      class="form-control border-none bg-neutral-100"
                                      id="firstname"
                                      aria-describedby="firstnameHelp"
                                    />
                                    <span class="text-xs"
                                      >Reason cannot be less than 2 characters
                                      or exceed 20 characters</span
                                    >
                                  </div>
                                </div>
                              </template>
                              <template v-slot:footer
                                ><div class="bg-yellow-900 rounded-md">
                                  <span
                                    type="button"
                                    class="px-2 py-2 text-white"
                                    data-dissmis="modal"
                                    @click.prevent="HandleUpdateWarranty()"
                                  >
                                    Update
                                  </span>
                                </div></template
                              >
                            </modal>
                            <modal
                              v-if="modalType == 'DeleteWarranty'"
                              @close="modalType == null"
                              data-target="#myModal"
                            >
                              <template v-slot:title>
                                <div
                                  class="flex items-center text-lg font-semibold"
                                >
                                  Delete
                                </div>
                              </template>
                              <template v-slot:body>
                                <p
                                  class="text-base py-3 text-center font-medium"
                                >
                                  Are you sure detete this warranty
                                  <b> {{ warrantyModal.warrantyId }}?</b>
                                </p>
                              </template>
                              <template v-slot:footer>
                                <div class="bg-red-900 rounded-md">
                                  <span
                                    type="button"
                                    class="px-3 py-2 text-white"
                                    data-dismiss="modal"
                                    @click="HandleDeleteWar()"
                                  >
                                    Delete
                                  </span>
                                </div>
                              </template>
                            </modal>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <loadding v-else />
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="customize">
                <div class="">
                  <div class="group-tabs ml-2">
                    <!-- Nav tabs -->
                    <div class="nav-order">
                      <ul
                        class="nav nav-pills custom bg-white flex gap-x-96 py-3 text-base font-medium"
                        role="tablist"
                      >
                        <li
                          role="presentation"
                          class="active"
                          @click="selectStatus('All')"
                        >
                          <a
                            href="#all"
                            aria-controls="all"
                            role="tab"
                            data-toggle="tab"
                            >All</a
                          >
                        </li>
                        <li
                          role="presentation"
                          @click="selectStatus('Accepted')"
                        >
                          <a
                            href="#accepted"
                            aria-controls="accepted"
                            role="tab"
                            data-toggle="tab"
                            >Accepted</a
                          >
                        </li>
                        <li
                          role="presentation"
                          @click="selectStatus('Rejected')"
                        >
                          <a
                            href="#rejected"
                            aria-controls="rejected"
                            role="tab"
                            data-toggle="tab"
                            >Rejected</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div
                      @click="HandleCheckOut"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-backdrop="false"
                      class="ml-80 w-4/12 ring-yellow-700 ring-1 px-2 text-sm text-yellow-800 cursor-pointer font-semibold text-center my-4 py-2 relative group rounded-md bg-yellow-49 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-amber-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]"
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
                          <h1 class="font-semibold text-base text-yellow-900">
                            CHECK OUT
                          </h1>
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
                                v-if="Object.keys(adChange).length === 0"
                                class="font-semibold text-sm opacity-90"
                                >{{ order.deliveryAddress }}
                              </span>
                              <span
                                v-else
                                class="font-semibold text-sm opacity-90"
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
                                class="font-semibold text-amber-900 cursor-pointer text-sm"
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
                            <div
                              v-for="f in order.items"
                              :key="f.customizeFurnitureId"
                            >
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
                                          {{ f.customizeFurnitureName }}
                                        </h5>
                                      </div>
                                    </div>
                                    <div
                                      class="d-flex flex-row align-items-center"
                                    >
                                      <div style="width: 50px">
                                        <h5 class="fw-normal mb-0">
                                          x{{ f.quantity }}
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
                          class="card bg-white rounded-md px-3 py-2 mb-3 mx-2"
                        >
                          <div class="flex gap-x-1 mt-3 mb-3">
                            <span
                              class="font-medium label_payment mt-2 mr-3 opacity-90"
                              >Point</span
                            >
                            <div class="input-group">
                              <input
                                v-model="userpoint"
                                type="text"
                                class="form-control border border-slate-200"
                                aria-label="Dollar amount (with dot and two decimal places)"
                                :maxlength="info.point"
                                placeholder="Redeem Shop Point"
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
                              <h5
                                class="label_payment mb-0 font-medium mt-4 opacity-90"
                              >
                                Payment Method
                              </h5>
                            </div>

                            <div class="mb-1">
                              <div>
                                <select
                                  v-model="paymentId"
                                  class="form-select text-sm border border-slate-200"
                                  aria-label="Default select example"
                                  required=""
                                >
                                  <option disabled value="">
                                    Please choose Method Payment
                                  </option>
                                  <option value="2">QR Code</option>
                                  <option value="3">Domestic Card</option>
                                  <option value="4">International Card</option>
                                </select>
                              </div>
                            </div>
                            <span
                              v-if="isMsgError"
                              class="error text-xs block"
                              >{{ msgErrorPayment }}</span
                            >
                            <span v-else class="text-xs"
                              >Please Choose Payment Method</span
                            >
                            <div class="mb-1">
                              <div
                                class="d-flex justify-content-between align-items-center mb-4"
                              >
                                <h5
                                  class="label_payment mb-0 font-medium mt-4 opacity-90"
                                >
                                  Delivery Method
                                </h5>
                              </div>

                              <div>
                                <div>
                                  <select
                                    v-model="delivery"
                                    class="form-select text-sm border border-slate-200 mb-2"
                                    aria-label="Default select example"
                                    @change="CalculateDeliveryFee"
                                    required="required"
                                  >
                                    <option disabled>
                                      Choose Delivery Method
                                    </option>
                                    <option
                                      v-for="ship in methodDelevery.data"
                                      :key="ship"
                                      :value="ship.service_id"
                                    >
                                      {{ ship.short_name }}
                                    </option>
                                  </select>
                                  <span v-if="!isMsgError" class="text-xs block"
                                    >Please Choose Delivery Method. Receive by 3
                                    to 5 day</span
                                  >
                                  <span v-else class="error text-xs">{{
                                    msgErrorDelivery
                                  }}</span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="grid grid-cols-6 gap-4 rounded-xl text-sm pb-3"
                            >
                              <label
                                class="label_payment mb-0 font-medium mt-4 col-span-6 opacity-90"
                                >Message for Store</label
                              >
                              <textarea
                                v-model="note"
                                placeholder="Your note..."
                                class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <!-- <hr class="mx-7 border-b-px border-indigo-50" /> -->
                        <div class="mx-3 mt-4 text-sm opacity-90">
                          <span class="font-semibold">TOTAL ORDER </span>
                          <span class="font-medium"
                            >| {{ customOrder.length }} CUSTOM FURNITURE</span
                          >
                        </div>
                        <div
                          class="mx-3 flex flex-col-reverse divide-y divide-y-reverse divide-dashed divide-slate-300 opacity-90"
                        >
                          <div class="d-flex justify-content-between mt-2">
                            <p class="font-semibold text-sm">SUBTOTAL</p>
                            <p class="font-bold text-base text-red-600">
                              {{ totalCost }} VND
                            </p>
                          </div>
                          <br />
                          <div class="flex gap-x-10 mt-4 font-medium">
                            <p class="text-sm">Point</p>
                            <p class="text-sm absolute right-10">
                              {{ userpoint }}
                            </p>
                          </div>
                          <div class="flex gap-x-10 mt-4 font-medium">
                            <p class="text-sm">Shipping Fee</p>
                            <p class="text-sm absolute right-10">
                              {{ shipCost }} VND
                            </p>
                          </div>
                          <div class="flex gap-x-10 mt-4 font-semibold">
                            <p class="text-sm">Subtotal</p>
                            <p class="text-sm absolute right-10">
                              {{ order.totalCost }} VND
                            </p>
                          </div>
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
                            <div class="w-8/12 flex gap-x-3">
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
                          class="px-2 py-2 text-white hover:ring-offset-2 hover:ring-2 bg-yellow-800 hover:ring-red-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
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
                          <option disabled value="">
                            {{ addressModal.type }}
                          </option>
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
                    <div class="tab-content col-span-3 max-md:col-span-3">
                      <div role="tabpanel" class="tab-pane active" id="all">
                        <itemCustom-order
                          v-if="orderCustomAll.length"
                          :customizeOders="orderCustomAll"
                        ></itemCustom-order>
                        <loadding v-else />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="accepted">
                        <itemCustom-order
                          v-if="orderAccepted.length"
                          :customizeOders="orderAccepted"
                        ></itemCustom-order>
                        <loadding v-else />
                      </div>
                      <div role="tabpanel" class="tab-pane" id="rejected">
                        <itemCustom-order
                          v-if="orderRejected.length"
                          :customizeOders="orderRejected"
                        ></itemCustom-order>
                        <loadding v-else />
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
</template>

<script>
import axios from "axios";
import AllFurniture from "./AllFurniture.vue";
import { format } from "date-fns";
import modal from "@/components/ModalPage.vue";
import itemOrder from "@/components/itemFurnitureOrder.vue";
import itemCustomOrder from "@/components/itemCustomFurnitureOrder.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import alertWanning from "@/components/AlertWanning.vue";
import loadding from "@/components/LoadingComponent.vue";

export default {
  components: {
    modal,
    itemOrder,
    alertError,
    alertSuccess,
    alertWanning,
    loadding,
    AllFurniture,
    itemCustomOrder,
  },
  data() {
    return {
      info: {},
      statusOrder: "All",
      orderAll: [],
      orderPending: [],
      orderPreparing: [],
      orderDelivering: [],
      orderDelivered: [],
      orderCancel: [],
      statusCustomOrder: "All",
      orderCustomAll: [],
      orderAccepted: [],
      orderRejected: [],
      address: [],
      wishlist: [],
      warranties: [],
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
      messageSuccess: "",
      messageWanning: null,
      otp: "",
      url: "",
      updateInfo: {},
      nameFile: {},
      file: "",
      DoB: "",
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
      furnitureOrder: [],
      shipFee: "",
      methodShip: [],
      userpoint: 0,
      note: "",
      shipfee: 0,
      isCancel: false,
      customOrder: 0,
      isMsgError: false,
      msgErrorPayment: "",
      msgErrorDelivery: "",
      warrantyModal: {},
      urlWarranty: {},
      messageOtp: {},
      feedbackModal: {},
    };
  },
  created() {
    this.getOrder();
    this.getInfor();
    this.getAddress();
    this.getWishList();
    this.getWarranties();
    this.getCustomizeOrder();
    this.getFeedback();
    this.getProvices();
    this.handleCheckOutOtherAdress();
  },
  methods: {
    selectStatusOrder(st) {
      this.statusOrder = st;
      this.getOrder();
    },
    selectStatus(st) {
      console.log("Da click");
      this.statusCustomOrder = st;
      console.log(st);
      this.getCustomizeOrder();
    },
    async getOrder() {
      try {
        const response = await axios.get(
          "customer/get-order?status=" + this.statusOrder
        );
        if (this.statusOrder === "All") {
          this.orderAll = response.data;
          for (let i = 0; i < this.orderAll.length; i++) {
            const date = new Date(this.orderAll[i].creationDate);
            this.orderAll[i].creationDate = format(date, "dd/MM/yyyy");
            this.orderAll[i].desiredCompletionDate = format(date, "dd/MM/yyyy");
          }
        } else if (this.statusOrder === "Pending") {
          this.orderPending = response.data;
          for (let i = 0; i < this.orderPending.length; i++) {
            const date = new Date(this.orderPending[i].creationDate);
            this.orderPending[i].creationDate = format(date, "dd/MM/yyyy");
            this.orderPending[i].desiredCompletionDate = format(
              date,
              "dd/MM/yyyy"
            );
          }
        } else if (this.statusOrder === "Preparing") {
          this.orderPreparing = response.data;
          for (let i = 0; i < this.orderPreparing.length; i++) {
            const date = new Date(this.orderPreparing[i].creationDate);
            this.orderPreparing[i].creationDate = format(date, "dd/MM/yyyy");
            this.orderPreparing[i].desiredCompletionDate = format(
              date,
              "dd/MM/yyyy"
            );
          }
        } else if (this.statusOrder === "Delivering") {
          this.orderDelivering = response.data;
          for (let i = 0; i < this.orderDelivering.length; i++) {
            const date = new Date(this.orderDelivering[i].creationDate);
            this.orderDelivering[i].creationDate = format(date, "dd/MM/yyyy");
            this.orderDelivering[i].desiredCompletionDate = format(
              date,
              "dd/MM/yyyy"
            );
          }
        } else if (this.statusOrder === "Delivered") {
          this.orderDelivered = response.data;
          for (let i = 0; i < this.orderDelivered.length; i++) {
            const date = new Date(this.orderDelivered[i].creationDate);
            this.orderDelivered[i].creationDate = format(date, "dd/MM/yyyy");
            this.orderDelivered[i].desiredCompletionDate = format(
              date,
              "dd/MM/yyyy"
            );
          }
        } else {
          this.orderCancel = response.data;
          console.log(this.orderCancel);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getCustomizeOrder() {
      try {
        const response = await axios.get(
          "customer/customize-furnitures?status=" + this.statusCustomOrder
        );

        if (this.statusCustomOrder === "All") {
          this.orderCustomAll = response.data;
          this.orderCustomAll = response.data;
          this.orderCustomAll = response.data.map((item) => ({
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
        } else if (this.statusCustomOrder === "Accepted") {
          this.orderAccepted = response.data;
          console.log("Result Accepted", this.orderAccepted);
          this.orderAccepted = response.data;
          this.orderAccepted = response.data.map((item) => ({
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
        } else {
          this.orderRejected = response.data;
          console.log("Result Accepted", this.orderRejected);
          this.orderRejected = response.data;
          this.orderRejected = response.data.map((item) => ({
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
          this.$router.push({ name: "login" });
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
          this.messageOtp = response.data;
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
    async HandleCheckOut() {
      this.opentModal("orderCustomize");
      this.furnitureOrder = this.$store.state.furnitureOrder;
      this.$store.dispatch("handleCheckOut");
      this.furnitureOrder = this.$store.state.furnitureOrder;
    },
    handleCheckOutOtherAdress() {
      this.furnitureOrder = this.$store.state.furnitureOrder;
      this.$store.dispatch("handleCheckOutOtherAddress", {
        province: this.adChange.province,
        district: this.adChange.district,
        ward: this.adChange.ward,
      });
      this.furnitureOrder = this.$store.state.furnitureOrder;
    },
    //HàmCheckout
    async getProvinceCode(province) {
      this.$store.dispatch("getProvinceCode", province);
    },
    async getDistrictCode(district) {
      this.$store.dispatch("getDistrictCode", district);
    },
    async getWardCode(ward) {
      this.$store.dispatch("getWardCode", ward);
    },
    async getAvailableServices() {
      this.$store.dispatch("getAvailableServices");
    },
    async CalculateDeliveryFee(e) {
      this.$store.dispatch("CalculateDeliveryFee", e);
    },
    async HandleOrder(order) {
      if (!this.paymentId || !this.delivery) {
        if (!this.paymentId) {
          this.isMsgError = true;
          this.msgErrorPayment = "Choose Payment Method required";
          console.log(this.msgErrorPayment);
        } else {
          this.msgErrorPayment = "";
        }
        if (!this.delivery) {
          this.isMsgError = true;
          this.msgErrorDelivery = "Choose Delivery Method required";
          console.log(this.msgErrorDelivery);
        } else {
          this.msgErrorPayment = "";
        }
      }
      let point = this.userpoint / 100;
      const payId = parseInt(this.paymentId);
      const id = this.addressId || order.deliveryAddressId;
      const itemsArray = order.items.map((item) => ({
        itemId: item.customizeFurnitureId,
        quantity: item.quantity,
      }));
      try {
        const response = await axios.post("customer/order", {
          addressId: id,
          paymentId: payId,
          usedPoint: point,
          note: this.note,
          total: this.totalCost,
          items: itemsArray,
        });
        if (response.status === 200) {
          this.modalType = null;
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
      // }
    },
    async HandleCancelOrder(id) {
      try {
        const response = await axios.put("customer/cancel-order?orderId=" + id);
        if (response.status === 200) {
          this.isCancel = true;
        }
      } catch (error) {
        console.error(error);
      }
    },
    changeAddress(ad) {
      this.addressId = ad.id;
      this.adChange = ad;
      this.handleCheckOutOtherAdress();
    },
    confirmChangeAddress() {
      this.opentModal("orderCustomize");
    },
    opentModal(type, ad) {
      this.modalType = type;
      this.addressModal = ad;
      this.warrantyModal = ad;
      this.feedbackModal = ad;
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
        this.warranties = response.data;
        console.log("This warranty", this.warranties);
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
        console.log(this.wishlist);
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
    async updateInfor() {
      const formData = new FormData();
      formData.append("Image", this.file);
      formData.append("FirtName", this.info.firstName);
      formData.append("LastName", this.info.lastName);
      formData.append("Gender", this.info.gender);
      formData.append("DoB", this.DoB);
      try {
        await axios.put("user/individual/update", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(this.avatar);
      } catch (error) {
        console.error(error);
      }
    },
    async UpdatePasssword() {
      console.log(this.email);
      try {
        const response = await axios.put(
          "authentication/change-password?oldPass=" +
            this.oldPassword +
            "&newPass=" +
            this.newPassword
        );
        if (response.status === 200) {
          alert("Change password success!");
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
    async HandleUpdateWarranty() {
      const formData = new FormData();
      formData.append("warrantyId", this.warrantyModal.warrantyId);
      formData.append("WarrantyReasons ", [this.warrantyModal.warrantyReasons]);
      if (this.arrayFile.length > 0) {
        for (var i = 0; i < this.arrayFile.length > 0; i++) {
          formData.append("UploadFiles", this.arrayFile[i]);
        }
      }
      try {
        const response = await axios.put(
          "customer/warranties/update",
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
          this.messageSuccess = "Update warranty successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
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
    async HandleDeleteWar() {
      try {
        const response = await axios.delete(
          "customer/warranties/remove/" + this.warrantyModal.warrantyId
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          this.isAlertSuccess = true;
          this.messageSuccess = `Delete this warranty ${this.warrantyModal.warrantyId}  successful!`;
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
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
    async HandleUpdateFeedback(id) {
      const formData = new FormData();
      formData.append("Content", this.feedbackModal.content);
      formData.append("VoteStar", this.star);
      formData.append("Anonymous", this.anonymous);
      try {
        const response = await axios.put(
          "customer/edit-feedback/" + id,
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
          this.messageSuccess = "Update feedback successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 3000);
        }
        console.log(response);
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 3000);
        console.error(error);
      }
    },
  },
  computed: {
    totalCost() {
      let point = this.userpoint / 100;
      console.log(this.order.totalCost);
      let sum = this.order.totalCost + this.shipCost - point;
      let cost = parseFloat(sum.toFixed(2));
      return cost;
    },
    order() {
      return this.$store.state.order;
    },
    methodDelevery() {
      return this.$store.state.methodDeliveries;
    },
    shipCost() {
      return this.$store.state.shipCost;
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
.form-control,
.col-form-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(66 32 6);
}
.span_address {
  font-size: 0.9rem;
}
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
/* .text-navy {
  color: #1ab394;
} */
.cart-product-imitation {
  text-align: center;
  height: 80px;
  width: 80px;
  background-color: #f8f8f9;
}
.date_order {
  padding-left: 79%;
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
.moon .side-bar.col-span-1 {
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
  border: 1px solid #6b430c40;
}
/* .text-navy {
  color: #6c5935;
} */
.quantity {
  font-size: 14px;
  margin-top: 3px;
}
.nav-order .nav.nav-pills li {
  margin-left: 2.1em;
}
.nav-order .nav.nav-pills {
  border-radius: 4px;
}
.nav-order {
  border-radius: 4px;
  border: 1px solid #6b430c40;
}
.info_customizeOrder {
  font-size: 13px;
  color: #4d525e;
}

textarea {
  background-color: rgb(238 238 243 / 58%);
  border: none;
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
.nav-order .nav.nav-pills.custom li {
  margin-left: 1.5em;
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
.item_feedback .rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 18px;
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
.form-select.address {
  background-color: #e8eef387;
}
option {
  text-transform: capitalize;
}
#customize .form-control,
#customize .form-select {
  background-color: rgb(238 238 243 / 58%);
}
.label_payment {
  font-size: 14px;
  font-weight: 600;
}
#customize select {
  font-size: 14px;
}
#customize input {
  font-size: 13px;
  font-weight: 400;
}
.side-bar {
  border: 1px solid #6b430c40;
}
.item_warranty {
  border-bottom: 1px solid #dad7d4;
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
</style>
