<template>
  <!-- <div v-if="customer / customer - infor"> -->
  <div class="pt-24 px-32">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent text-xs pt-3">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">All Product</a></li>
        <li class="breadcrumb-item active" aria-current="page">Sofa</li>
      </ol>
    </nav>
  </div>
  <div class="container px-36 bg-neutral-100">
    <div>
      <h1 class="font-semibold pt-4 text-xl text-slate-700">Profile</h1>
    </div>
    <div class="view-account">
      <section class="module">
        <div class="module-inner grid grid-cols-6">
          <div class="side-bar col-span-1">
            <div class="user-info">
              <img
                class="img-profile img-circle img-responsive center-block"
                src="https://ordinaryofficial.vn/wp-content/uploads/2022/12/con-gai-han-quoc.jpg"
                alt=""
              />
              <ul class="meta list list-unstyled">
                <li class="name">{{ info.firtName }} {{ info.lastName }}</li>
                <li class="activity">Last logged in: Today at 2:18pm</li>
              </ul>
            </div>
            <nav class="side-menu">
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
                    href="#phone"
                    aria-controls="phone"
                    role="tab"
                    data-toggle="tab"
                    ><span class="fa-solid fa-phone"></span> Setting Phone</a
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
                    href="#order"
                    aria-controls="order"
                    role="tab"
                    data-toggle="tab"
                    ><span class="fa-solid fa-truck-fast"></span> Order</a
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
              </ul>
            </nav>
            <div class="pt-4">
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
          <div class="tab-content col-span-5 bg-gray-50">
            <div role="tabpanel" class="tab-pane" id="profile">
              <h1 class="pt-4 font-medium text-lg pl-4 text-slate-700">
                Information
              </h1>
              <hr class="w-1/12 ml-4 mt-1" />
              <div class="py-4 leading-10 px-4 w-full">
                <div
                  class="card mb-4 bg-white rounded-lg px-3 py-3 text-base leading-10 text-slate-700"
                >
                  <div class="grid grid-cols-2 gap-x-7">
                    <div class="font-medium">First Name</div>
                    <span>{{ info.firtName }}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-x-7">
                    <div class="font-medium">Last Name</div>
                    <span>{{ info.lastName }}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-x-7">
                    <div class="font-medium">Gender</div>
                    <span>{{ info.gender }}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-x-7">
                    <div class="font-medium">Dob</div>
                    <span>{{ info.doB }}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-x-7">
                    <div class="font-medium">Spent</div>
                    <span>{{ info.spent }}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-x-7">
                    <div class="font-medium">Debit</div>
                    <span>{{ info.debit }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane active" id="phone">
              <div class="bg-white h-12/12">
                <h1 class="text-lg font-medium pt-7 mb-4 ml-2">
                  Your number phone
                </h1>
                <hr />
                <div v-if="!isEditPhone">
                  <div class="grid grid-cols-3 gap-x-1 px-10 py-10 mt-4">
                    <span class="font-medium">Phone</span>

                    <span>{{ phoneNumber.phoneNumber }}</span>
                    <div
                      @click.prevent="editPhone"
                      class="bg-yellow-950 text-white py-2 px-2 rounded-md w-3/12 cursor-pointer"
                    >
                      Change
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="grid grid-cols-3 gap-x-1 px-10 py-10 mt-4">
                    <div class="grid grid-cols-2 gap-x-1">
                      <span class="font-medium">New Phone</span>
                      <input
                        v-model="phoneEditting"
                        type="text"
                        class="form-control w-11/12 h-10/12"
                        aria-label="phone"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <!-- <div class="grid grid-cols-4">
                      <span class="font-medium">OTP</span>
                      <input
                        v-model="otp"
                        type="text"
                        class="form-control h-10/12"
                        aria-label="phone"
                        aria-describedby="basic-addon1"
                      />
                    </div> -->

                    <div class="flex gap-x-3">
                      <div
                        @click.prevent="savePhoneNumber"
                        class="bg-yellow-950 text-white py-2 px-2 rounded-md w-3/12 cursor-pointer text-center"
                      >
                        Save
                      </div>
                      <div
                        @click.prevent="cancelEditing"
                        class="bg-yellow-950 text-white py-2 px-2 rounded-md w-3/12 cursor-pointer text-center"
                      >
                        Close
                      </div>
                      <div v-if="(phoneNumber.confirm = 'false')">
                        <div
                          @click.prevent="isShowModalOtp = true"
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          class="bg-yellow-950 text-white py-2 px-2 rounded-md cursor-pointer"
                        >
                          Confirm
                        </div>
                        <modal v-if="isShowModalOtp" @close="closeModal">
                          <template v-slot:title>
                            <div class="flex items-center text-lg font-medium">
                              Enter your OTP Code
                            </div>
                          </template>
                          <template v-slot:body>
                            <div class="inp_otp">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="settings">
              <form @submit.prevent="updateInfo">
                <div class="edit_infor bg-gray-50 px-6">
                  <div class="grid grid-cols-3 gap-x-6 px-7">
                    <div>
                      <div class="col-span-1 bg-white w-10/12 px-4 py-3 mt-4">
                        <div class="avatar">
                          <img
                            class="rounded-full w-6/12 ml-10"
                            src="@/assets/images/avatar.jpg"
                            alt="avatar"
                          />
                          <h1 class="font-semibold text-xl pb-2 text-center">
                            {{ info.firtName }} {{ info.lastName }}
                          </h1>
                          <input
                            class="text-sm"
                            type="file"
                            id="myFile"
                            name="filename"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-span-2 form_edit py-4">
                      <div class="">
                        <div
                          class="bg-white drop-shadow-sm py-1 px-4 rounded-lg"
                        >
                          <div>
                            <h1 class="text-lg my-9 font-bold">
                              Edit Information
                            </h1>
                          </div>
                          <div class="form justify-center">
                            <div class="grid grid-cols-2 gap-x-6">
                              <div>
                                <label for="firstname" class="form-label"
                                  >First Name</label
                                >
                                <input
                                  v-model="info.firtName"
                                  type="text"
                                  class="form-control"
                                  id="firstname"
                                  aria-describedby="firstnameHelp"
                                />
                              </div>
                              <div>
                                <label for="lastname" class="form-label"
                                  >Last Name</label
                                >
                                <input
                                  v-model="info.lastName"
                                  type="text"
                                  class="form-control"
                                  id="lastname"
                                  aria-describedby="lastnameHelp"
                                />
                              </div>
                            </div>
                            <div class="grid grid-cols-2 gap-x-6">
                              <div>
                                <label for="gender" class="form-label"
                                  >Gender</label
                                >
                                <input
                                  v-model="info.gender"
                                  type="text"
                                  class="form-control"
                                  id="gender"
                                  aria-describedby="genderHelp"
                                />
                              </div>
                              <div>
                                <label for="dob" class="form-label">Dob</label>
                                <input
                                  v-model="info.doB"
                                  type="tex"
                                  class="form-control"
                                  id="dob"
                                  aria-describedby="dobHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <!-- </div> -->
                          <div class="my-1">
                            <button type="submit" class="btn my-8">
                              Update
                            </button>
                            <!-- <router-link to="/otp" class="btn my-8"
                                >Update</router-link
                              > -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div role="tabpanel" class="tab-pane" id="address">
              <div class="content-panel">
                <h2 class="title pb-2 text-center font-medium">
                  Billing Address
                </h2>
                <div
                  class="address bg-white px-4 py-4 rounded-md mx-24 text-sm"
                >
                  <form
                    id="address"
                    class="form-horizontal"
                    method="post"
                    action="#"
                    role="form"
                  >
                    <div class="address">
                      <!-- <div class="form-group">
                        <label class="control-label font-medium"
                          >Address ID</label
                        >
                        <div class="">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="1.."
                          />
                        </div>
                      </div> -->
                      <!-- <div>
                        <div class="relative" v-click-away="hideProvinceList">
                          <input
                            class="p-1 px-2 appearance-none outline-none text-gray-800 border"
                            v-model.trim="provinceSearch"
                            placeholder="Tỉnh..."
                            @focus="startSearchingProvince"
                          />

                          <div
                            class="absolute z-10 max-h-48 w-full bg-gray-100 overflow-y-auto shadow"
                            v-show="
                              provinceListShown && filteredProvinces.length
                            "
                          >
                            <ul class="list-none">
                              <li
                                v-for="(item, idx) of filteredProvinces"
                                :key="idx"
                                v-html="highlightName(item)"
                                class="px-2 py-1 cursor-pointer bg-white hover:bg-blue-100"
                                @click="selectProvince(item)"
                              ></li>
                            </ul>
                          </div>
                        </div>
                      </div> -->
                      <div class="grid grid-cols-2 py-3">
                        <span class="font-medium">Address </span>
                        <span>{{ address }}</span>
                      </div>
                      <div class="form-group">
                        <label class="font-medium">Stress</label>
                        <div class="">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Me Tri"
                          />
                        </div>
                        <div class="grid grid-cols-2 gap-x-2">
                          <div class="form-group">
                            <label class="font-medium">Commune</label>
                            <div class="">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Nam Tu Liem"
                              />
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="font-medium">District</label>
                            <div class="">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Me Tri"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="font-medium">Province</label>
                          <div class="">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Ha Noi"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="font-medium">Address Owner</label>
                          <div class="">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Minh"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- <hr /> -->
                      <div class="text-center my-4">
                        <!-- <button type="submit" class="btn my-8">Create</button> -->
                        <router-link to="/otp" class="btn_add my-8"
                          >Add</router-link
                        >
                      </div>
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
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is
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
                                                          <div class="invoice">
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
                                                              shopping with us!
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
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is
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
                                                          <div class="invoice">
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
                                                              shopping with us!
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
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is
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
                                                          <div class="invoice">
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
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is
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
                                                            <hr class="my-4" />
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
                                                                  >Luu Thi Minh
                                                                  - 0398677620
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
                                                                  >15 Mar</span
                                                                ><span
                                                                  >Order
                                                                  placed</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="d-flex flex-column justify-content-center"
                                                              >
                                                                <span
                                                                  >15 Mar</span
                                                                ><span
                                                                  >Order
                                                                  placed</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="d-flex flex-column justify-content-center align-items-center"
                                                              >
                                                                <span
                                                                  >15 Mar</span
                                                                ><span
                                                                  >Order
                                                                  Dispatched</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="d-flex flex-column align-items-center"
                                                              >
                                                                <span
                                                                  >15 Mar</span
                                                                ><span
                                                                  >Out for
                                                                  delivery</span
                                                                >
                                                              </div>
                                                              <div
                                                                class="d-flex flex-column align-items-end"
                                                              >
                                                                <span
                                                                  >15 Mar</span
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
                                                <div class="product_transport">
                                                  <div
                                                    class="bg-white rounded-md px-1"
                                                  >
                                                    <div>
                                                      <div class="card mb-3">
                                                        <div class="card-body">
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
                                                              <div class="ms-3">
                                                                <h5>Sofa 1</h5>
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
                                                        <div class="card-body">
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
                                                              <div class="ms-3">
                                                                <h5>Sofa 1</h5>
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
                                                        <div class="card-body">
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
                                                              <div class="ms-3">
                                                                <h5>Sofa 1</h5>
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
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is
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
                                                          <div class="invoice">
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
                                                              shopping with us!
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
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is
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
                                                          <div class="invoice">
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
              <div class="nav-warranty">
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
              </div>

              <!-- Tab panes -->
              <div class="tab-content">
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
                    class="grid grid-cols-2 bg-white drop-shadow rounded-lg mx-28 my-3"
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
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default {
  components: {
    modal,
  },
  data() {
    return {
      info: {},
      isShowModalOtp: false,
      orderAll: [],
      orderPending: [],
      orderDeliveried: [],
      status: "",
      phoneNumber: "",
      isEditPhone: false,
      otp: "",
      address: "",
      wishlist: [],
    };
  },
  created() {
    this.getOrderAll();
    this.getInfor();
    this.getInforPhone();
    this.getAddress();
    this.getWishList();
    this.getOrderPending();
    this.getOrderDeliveried();
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
        const response = await axios.get("customer/customer-infor");
        this.info = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getInforPhone() {
      try {
        const response = await axios.get(
          "customer/customer-infor/phone-number"
        );
        this.phoneNumber = response.data;
        // this.phoneNumber.confirm = true;
        // console.log(this.phoneNumber.confirm);
      } catch (error) {
        console.error(error);
      }
    },
    async updateInfo() {
      try {
        const response = await axios.put("customer/update-infor", {
          firtName: this.info.firtName,
          lastName: this.info.lastName,
          gender: this.info.gender,
          avatar: this.info.gender,
          doB: this.info.doB,
        });
        this.info = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    editPhone() {
      this.isEditPhone = true;
    },
    cancelEditing() {
      this.isEditPhone = false;
    },
    async confirmNumberPhone() {
      try {
        const response = await axios.get(
          "customer/customer-infor/phone-number/get-otp",
          {
            params: { phoneNums: this.phoneEditting },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    },
    async savePhoneNumber() {
      try {
        const response = await axios.put(
          "customer/customer-infor/phone-number/update",
          {
            phoneNumber: this.phoneEditting,
            otp: this.otp,
          }
        );
        this.phoneNumber = response.data;
      } catch (error) {
        console.error(error.response.data.message);
      }
    },
    async getAddress() {
      try {
        const response = await axios.get("customer/customer-infor/address");
        this.address = response.data;
        console.log(this.address);
      } catch (error) {
        console.error(error);
      }
    },
    async getWishList() {
      try {
        const response = await axios.get("customer/wishlist");
        this.wishlist = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
body {
  background: #f9f9fb;
}
.view-account {
  background: #ffffff;
  margin-top: 20px;
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
    border-bottom: 1px solid #f3f3f7;
    margin-right: 0;
    margin-bottom: 0;
  }
  .view-account .side-bar .side-menu .nav > li > a {
    display: block;
    color: #9499a3;
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
.my-1 .btn.my-8 {
  background-color: #4f4c3d;
  color: white;
  margin-left: 75%;
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
</style>
