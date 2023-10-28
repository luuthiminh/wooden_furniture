<template>
  <header-admin :title="title" />
  <div class="bg-white px-6 py-6 rounded-lg mb-5 mb-xl-10 mt-32">
    <div class="flex">
      <div class="avatar">
        <router-link to="/profileAssistant">
          <img
            class="rounded-md cursor-pointer w-3/12"
            src="@/assets/images/avatar.jpg "
            alt="avatar"
          />
        </router-link>
      </div>
      <div class="some_infor">
        <h1 class="name_user font-semibold">Minh Luu Thi</h1>
        <div class="flex">
          <div class="flex text-gray-400 font-medium text-sm py-2">
            <i class="bi bi-phone"></i>
            <span class="d-flex align-items-center text-hover-primary me-5 mb-2"
              >+84398677620</span
            >
          </div>
          <div class="flex text-gray-400 font-medium text-sm py-2">
            <i class="bi bi-envelope"></i>
            <span class="d-flex align-items-center text-hover-primary me-5 mb-2"
              >minh@gmail.com</span
            >
          </div>
        </div>
        <div class="flex">
          <div
            class="border-dashed border-1 border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3"
          >
            <div class="d-flex align-items-center">
              <i class="bi bi-arrow-down-circle pr-2"></i>
              <div class="text-base fw-bold counted"><p>$0</p></div>
            </div>
            <div class="fw-semibold fs-6 text-gray-400">
              <span>Depit</span>
            </div>
          </div>
          <div
            class="border-dashed border-1 border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3"
          >
            <div class="d-flex align-items-center">
              <i class="bi bi-arrow-up-circle pr-2"></i>
              <div class="text-base fw-bold counted"><p>$1000</p></div>
            </div>
            <div class="fw-semibold fs-6 text-gray-400">
              <span>Spent</span>
            </div>
          </div>
          <div
            class="border-dashed border-1 border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3"
          >
            <div class="d-flex align-items-center">
              <i class="bi bi-arrow-up-circle pr-2"></i>
              <div class="text-base fw-bold counted"><p>10</p></div>
            </div>
            <div class="fw-semibold fs-6 text-gray-400">
              <span>Ordered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul
      class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fw-bold"
    >
      <li class="nav-item mt-2 active">
        <a
          class="nav-link text-slate-500 font-semibold py-2"
          data-toggle="tab"
          href="#infor"
          >Information</a
        >
      </li>
      <li class="nav-item mt-2">
        <a
          class="nav-link text-slate-500 font-semibold py-2"
          data-toggle="tab"
          href="#settings"
          >Settings</a
        >
      </li>
      <li class="nav-item mt-2">
        <a
          class="nav-link text-slate-500 font-semibold py-2"
          data-toggle="tab"
          href="#billing"
          >Billing</a
        >
      </li>
    </ul>
  </div>

  <div class="tab-content">
    <div id="infor" class="tab-pane fade in active">
      <div class="tab_content bg-white mb-5 mb-xl-10 rounded-lg">
        <div class="card-title cursor-pointer">
          <h1 class="font-semibold text-lg px-6 py-6">Profile Details</h1>
          <hr class="bg-slate-400" />
          <div class="infor py-6 px-6">
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >Full Name</label
              >
              <label class="col-lg-8 font-semibold text-sm text-slate-700"
                >Minh Luu Thi</label
              >
            </div>
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >Full Name</label
              >
              <label class="col-lg-8 font-semibold text-sm text-slate-700"
                >Minh Luu Thi</label
              >
            </div>
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >Gender</label
              >
              <label class="col-lg-8 font-semibold text-sm text-slate-700"
                >Female</label
              >
            </div>
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >DoB</label
              >
              <label class="col-lg-8 font-semibold text-sm text-slate-700"
                >28/06/2002</label
              >
            </div>
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >Phone</label
              >
              <div class="col-lg-8 font-semibold text-sm">
                <label class="text-slate-700" for="">+84 98677630</label>
                <button
                  class="bg-slate-600 text-white px-1 py-1 rounded-md ml-2 text-xs"
                >
                  Verified
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="invoice bg-white mb-5 mb-xl-10 rounded-lg">
        <div class="invoice_item flex">
          <h1 class="font-semibold text-lg py-6">Invoices</h1>
          <ul
            class="text-base font-medium text-slate-600 float-right flex gap-x-10 py-6"
          >
            <li>2020</li>
            <li>2021</li>
            <li>2022</li>
          </ul>
        </div>
        <div class="invoice_table py-6 px-6">
          <table
            class="table table-borderless text-slate-500 font-medium text-center"
          >
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
                <th>DATE</th>
                <th>INVOICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234</td>
                <td>$1000</td>
                <td>
                  <button
                    class="bg-green-100 text-green-500 px-1 py-1 rounded-md"
                  >
                    In Progress
                  </button>
                </td>
                <td>1/9/2023</td>
                <td class="td_action w-1/12 text-xs">
                  <!-- <div class="button_dl" data-tooltip="Size: 20Mb">
                    <div class="button-wrapper">
                      <div class="text">Download</div>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div> -->
                  <div class="button_csv">
                    <a href="#" class="anchor">
                      <span>Download CV</span>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1234</td>
                <td>$1000</td>
                <td>
                  <button
                    class="bg-yellow-100 text-yellow-500 px-1 py-1 rounded-md"
                  >
                    Pending
                  </button>
                </td>
                <td>1/9/2023</td>
                <td class="td_action w-1/12 text-xs">
                  <div class="button_dl" data-tooltip="Size: 20Mb">
                    <div class="button-wrapper">
                      <div class="text">Download</div>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1234</td>
                <td>$1000</td>
                <td>
                  <button class="bg-sky-100 text-sky-500 px-1 py-1 rounded-md">
                    Approved
                  </button>
                </td>
                <td>1/9/2023</td>
                <td class="td_action w-1/12 text-xs">
                  <div class="button_dl" data-tooltip="Size: 20Mb">
                    <div class="button-wrapper">
                      <div class="text">Download</div>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1234</td>
                <td>$1000</td>
                <td>
                  <button class="bg-red-100 text-red-500 px-1 py-1 rounded-md">
                    Rejected
                  </button>
                </td>
                <td>1/9/2023</td>
                <td class="td_action w-1/12 text-xs">
                  <div class="button_dl" data-tooltip="Size: 20Mb">
                    <div class="button-wrapper">
                      <div class="text">Download</div>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1234</td>
                <td>$1000</td>
                <td>
                  <button class="bg-red-100 text-red-500 px-1 py-1 rounded-md">
                    Rejected
                  </button>
                </td>
                <td>1/9/2023</td>
                <td class="td_action w-1/12 text-xs">
                  <div class="button_dl" data-tooltip="Size: 20Mb">
                    <div class="button-wrapper">
                      <div class="text">Download</div>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1234</td>
                <td>$1000</td>
                <td>
                  <button class="bg-red-100 text-red-500 px-1 py-1 rounded-md">
                    Rejected
                  </button>
                </td>
                <td>1/9/2023</td>
                <td class="td_action w-1/12 text-xs">
                  <div class="button_dl" data-tooltip="Size: 20Mb">
                    <div class="button-wrapper">
                      <div class="text">Download</div>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1234</td>
                <td>$1000</td>
                <td>
                  <button class="bg-red-100 text-red-500 px-1 py-1 rounded-md">
                    Rejected
                  </button>
                </td>
                <td>1/9/2023</td>
                <td class="td_action w-1/12 text-xs">
                  <div class="button_dl" data-tooltip="Size: 20Mb">
                    <div class="button-wrapper">
                      <div class="text">Download</div>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="settings" class="tab-pane fade">
      <div class="tab_content bg-white mb-5 mb-xl-10 rounded-lg">
        <div class="card-title cursor-pointer">
          <h1 class="font-semibold text-lg px-6 py-6">Profile Details</h1>
          <hr class="bg-slate-400" />
          <div class="infor py-6 px-6">
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >Full Name</label
              >
              <div class="col-lg-8">
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >Full Name</label
              >
              <div class="col-lg-8">
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >Gender</label
              >
              <div class="col-lg-8">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Choose gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </select>
              </div>
            </div>
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >DoB</label
              >
              <div class="col-lg-8">
                <input
                  v-model="date"
                  type="date"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div class="row mb-4 flex">
              <label class="col-lg-4 font-medium text-sm text-slate-500"
                >Phone</label
              >
              <div class="col-lg-8 font-semibold text-sm flex">
                <input
                  v-model="name"
                  type="text"
                  class="form-control w-6/12"
                  id="exampleInputPassword1"
                />
                <button
                  class="bg-slate-600 text-white px-2 py-1 rounded-md ml-2 text-xs cursor-pointer"
                >
                  Verified
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="billing" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Some content in menu 2.</p>
    </div>
  </div>
</template>
<script>
import HeaderAdmin from "@/components/headerAdmin.vue";
export default {
  components: { HeaderAdmin },

  data() {
    return {
      isShowEditModal: false,
      title: "Profile Customer",
    };
  },
};
</script>
<style scoped>
.nav-line-tabs.nav-line-tabs-2x .nav-item {
  margin-bottom: -2px;
}
.nav-line-tabs .nav-item .nav-link.active {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid rgb(62, 63, 89);
  transition: color 0.2s ease;
}
.text-slate-400:hover {
  color: #2f4a79 !important;
}
.text-slate-400.active {
  transition: color 0.2s ease;
  color: #263c63 !important;
}
.some_infor {
  margin-left: -27em;
}
.invoice_item {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  min-height: 70px;
  padding: 0 2.25rem;
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
}
/* invoices */
.invoice_table .table {
  font-size: 0.8rem !important;
}
.invoice_table th {
  font-weight: 600;
}
.invoice_table .avatar {
  width: 61px;
  margin-top: -8px;
}
.invoice_table td {
  padding-top: 1em;
  padding-bottom: 1em;
}
.invoice_table .user {
  margin-top: -10px;
}
.invoice_table {
  overflow: scroll;
  overflow-x: hidden;
  height: 32em;
  margin-left: -70px;
}
/* icon_download */
.button_dl {
  --width: 100px;
  --height: 35px;
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-button: 18px;
  --button-color: #1163ff;
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.45em;
  font-family: "Arial";
  transition: background 0.3s;
}

.button_dl::before {
  position: absolute;
  content: attr(data-tooltip);
  width: var(--tooltip-width);
  height: var(--tooltip-height);
  background-color: var(--tooltip-color);
  font-size: 0.9rem;
  color: #111;
  border-radius: 0.25em;
  line-height: var(--tooltip-height);
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
  left: calc(50% - var(--tooltip-width) / 2);
}

.button_dl::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: var(--tooltip-color);
  left: calc(50% - 10px);
  bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
}

.button_dl::after,
.button_dl::before {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
}

.button_dl .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button_dl .button-wrapper,
.text,
.icon {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
}

.button_dl .text {
  top: 0;
}

.button_dl .text,
.icon {
  transition: top 0.5s;
}

.button_dl .icon {
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button_dl .icon svg {
  width: 24px;
  height: 24px;
}

.button_dl:hover {
  background: #6c18ff;
}

.button_dl:hover .text {
  top: -100%;
}

.button_dl:hover .icon {
  top: 0;
}

.button_dl:hover:before,
.button_dl:hover:after {
  opacity: 1;
  visibility: visible;
}

.button_dl:hover:after {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
}

.button_dl:hover:before {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
}
.anchor {
  text-decoration: none;
  color: #fff;
  display: inline-block;
  font-family: sans-serif;
  font-weight: 600;
  border-radius: 7px;
  border: 2px solid #ed553b;
  padding: 0px 15px 0px;
  overflow: hidden;
  position: relative;
}

.anchor:hover {
  color: #4e484a;
}

.button_csv a::before {
  position: absolute;
  content: "";
  z-index: 0;
  background-color: #ed553b;
  left: -5px;
  right: -5px;
  bottom: -5px;
  height: 111%;
  transition: all 0.3s ease;
}

.button_csv a:hover::before {
  height: 11%;
}

.button_csv span {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}
</style>
