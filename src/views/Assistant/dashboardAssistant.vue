<template>
  <div class="max-md:block mt-10">
    <div class="grid grid-cols-5 gap-x-8 px-10">
      <div>
        <div
          class="card overflow-hidden h-md-50 mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl"
        >
          <div
            class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
          >
            <div class="mb-4 px-3">
              <div class="d-flex align-items-center mb-2">
                <!-- <span
                  class="text-sm font-semibold text-gray-400 align-self-start me-1>"
                  >$</span
                > -->
                <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                  dataNumber.materialTotal
                }}</span>
              </div>

              <p class="text-sm font-medium text-gray-400">Total Materials</p>
              <p class="text-xs font-medium text-gray-400">
                (in the warehouse)
              </p>
            </div>
            <div
              class="bg-gradient-to-r from-cyan-600 to-blue-600 h-10 text-center font-semibold text-white pt-2"
            >
              <i
                class="bi bi-arrow-up text-center font-semibold text-white"
              ></i>
              2.2%
            </div>
          </div>
        </div>
      </div>
      <div
        class="card overflow-hidden h-md-50 mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl"
      >
        <div
          class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
        >
          <div class="mb-4 px-3">
            <div class="d-flex align-items-center mb-2">
              <!-- <span
                class="text-sm font-semibold text-gray-400 align-self-start me-1>"
                >$</span
              > -->
              <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                dataNumber.furnitureTotal
              }}</span>
              <!-- <div class="badge text-pink-600 bg-pink-50">
                <i class="bi bi-arrow-down"></i>
                2.8%
              </div> -->
            </div>

            <p class="text-sm font-medium text-gray-400">Total Furniture</p>
            <p class="text-xs font-medium text-gray-400">(in the warehouse)</p>
          </div>
          <!-- <div
            class="bg-gradient-to-r from-cyan-600 to-blue-600 h-10 text-center font-semibold text-white pt-2"
          >
            <i class="bi bi-arrow-up text-center font-semibold text-white"></i>
            2.2%
          </div> -->
          <div
            class="bg-gradient-to-r from-yellow-600 to-red-600 h-10 text-center font-semibold text-white pt-2"
          >
            <i
              class="bi bi-arrow-down text-center font-semibold text-white"
            ></i>
            2.2%
          </div>
        </div>
      </div>
      <div
        class="card overflow-hidden h-md-50 mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl"
      >
        <div
          class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
        >
          <div class="mb-4 px-3">
            <div class="d-flex align-items-center mb-2">
              <!-- <span
                class="text-sm font-semibold text-gray-400 align-self-start me-1>"
                >$</span
              > -->
              <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                dataNumber.spent
              }}</span>
            </div>

            <p class="text-sm font-medium text-gray-400">Total Expenses</p>
            <p class="text-xs font-medium text-gray-400">(material)</p>
          </div>
          <div
            class="bg-gradient-to-r from-cyan-600 to-blue-600 h-10 text-center font-semibold text-white pt-2"
          >
            <i class="bi bi-arrow-up text-center font-semibold text-white"></i>
            2.2%
          </div>
        </div>
      </div>
      <div>
        <div
          class="card overflow-hidden h-md-50 mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl"
        >
          <div
            class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
          >
            <div class="mb-4 px-3">
              <div class="d-flex align-items-center mb-2">
                <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                  dataNumber.materialExportTime
                }}</span>
                <!-- <div class="badge text-pink-600 bg-pink-50">
                  <i class="bi bi-arrow-down"></i>2.8%
                </div> -->
              </div>
              <p class="text-sm font-medium text-gray-400">
                Total Export Material
              </p>
              <!-- <p class="text-xs font-medium text-gray-400">(material)</p> -->
            </div>
            <div
              class="bg-gradient-to-r from-cyan-600 to-blue-600 h-10 text-center font-semibold text-white pt-2"
            >
              <i
                class="bi bi-arrow-up text-center font-semibold text-white"
              ></i>
              2.2%
            </div>
            <!-- <Line :data="lineData" :options="lineOptions" /> -->
          </div>
        </div>
      </div>
      <div
        class="card overflow-hidden h-md-50 mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl"
      >
        <div
          class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
        >
          <div class="mb-4 px-3">
            <div class="d-flex align-items-center mb-2">
              <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                dataNumber.furnitureExportTime
              }}</span>
              <!-- <div class="badge badge-light-success fs-base">
                <i class="bi bi-arrow-up"></i>
                2.2%
              </div> -->
            </div>

            <p class="text-sm font-medium text-gray-400">
              Total Export Furniture
            </p>
          </div>
          <!-- <div
            class="bg-gradient-to-r from-cyan-600 to-blue-600 h-10 text-center font-semibold text-white pt-2"
          >
            <i class="bi bi-arrow-up text-center font-semibold text-white"></i>
            2.2%
          </div> -->
          <div
            class="bg-gradient-to-r from-yellow-600 to-red-600 h-10 text-center font-semibold text-white pt-2"
          >
            <i
              class="bi bi-arrow-down text-center font-semibold text-white"
            ></i>
            2.2%
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-x-8 px-10">
      <div class="mb-5 mb-xl-10 border-none bg-white shadow-md rounded-xl">
        <div class="graph px-7 py-7">
          <span class="card-label font-semibold text-dark text-lg block"
            >Material Imported Static</span
          >
          <p class="text-gray-400 pt-2 font-medium text-sm">
            Users from all channels
          </p>
          <div class="line_static mt-10">
            <Line :data="lineData2" :options="lineOptions2" />
          </div>
        </div>
      </div>
      <div class="mb-5 mb-xl-10 border-none bg-white shadow-md rounded-xl">
        <div class="graph px-7 py-7">
          <span class="card-label font-semibold text-dark text-lg block"
            >Furniture Sale Static</span
          >
          <p class="text-gray-400 pt-2 font-medium text-sm">
            Users from all channels
          </p>
          <div class="line_static mt-10">
            <!-- <canvas
              id="doughnutChart"
              aria-label="Hello ARIA World"
              role="img"
            ></canvas> -->
            <div class="w-64 ml-28">
              <canvas
                id="doughnut"
                aria-label="Hello ARIA World"
                role="img"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-x-8 px-10">
      <div class="mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl">
        <div class="graph px-7 py-7">
          <span class="card-label font-semibold text-dark text-lg block"
            >New Customers This Month</span
          >
          <p class="text-gray-400 pt-2 font-medium text-sm">
            Users from all channels
          </p>
        </div>
        <div class="px-9 py-2">
          <span class="text-3xl font-semibold text-gray-800 me-2 lh-1 block"
            >9,700</span
          >
          <p class="text-sm font-medium text-gray-400">Orders This Month</p>
        </div>
        <div class="px-9 py-2">
          <Bar :data="barData" :options="barOptions" />
        </div>
      </div>
      <div class="mb-5 mb-xl-10 border-none bg-white shadow-md rounded-xl">
        <div class="graph px-7 py-7">
          <span class="card-label font-semibold text-dark text-lg block"
            >Furniture Sale Static</span
          >
          <p class="text-gray-400 pt-2 font-medium text-sm">
            Users from all channels
          </p>
          <div class="line_static mt-10">
            <Line :data="lineData2" :options="lineOptions2" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-x-8">
    <div class="mb-xl-10 border-none bg-white shadow-md rounded-xl mb-5">
      <div class="px-7 py-7">
        <span class="font-semibold text-dark text-lg">Recent Orders</span>
      </div>
      <div class="categories">
        <ul class="nav nav-pills nav-pills-custom mb-3 flex" role="tablist">
          <li class="nav-item mb-3 me-3 me-lg-6" role="presentation">
            <img
              class="rounded-md cursor-pointer"
              src="@/assets/images/admin/icon_bed.png"
              alt="avatar"
            />
            <span class="font-medium text-xs">Bed</span>
          </li>
          <li class="nav-item mb-3 me-3 me-lg-6" role="presentation">
            <img
              class="rounded-md cursor-pointer"
              src="@/assets/images/admin/icon_clock.png"
              alt="avatar"
            />
            <span class="font-medium text-xs">Clock</span>
          </li>
          <li class="nav-item mb-3 me-3 me-lg-6" role="presentation">
            <img
              class="rounded-md cursor-pointer"
              src="@/assets/images/admin/icon_shelves_tv.png"
              alt="avatar"
            />
            <span class="font-medium text-xs">Shelves TV</span>
          </li>
          <li class="nav-item mb-3 me-3 me-lg-6" role="presentation">
            <img
              class="rounded-md cursor-pointer"
              src="@/assets/images/admin/icon_clock.png"
              alt="avatar"
            />
            <span class="font-medium text-xs">Bed</span>
          </li>
          <li class="nav-item mb-3 me-3 me-lg-6" role="presentation">
            <img
              class="rounded-md cursor-pointer"
              src="@/assets/images/admin/icon_clock.png"
              alt="avatar"
            />
            <span class="font-medium text-xs">Bed</span>
          </li>
          <li class="nav-item mb-3 me-3 me-lg-6" role="presentation">
            <img
              class="rounded-md cursor-pointer"
              src="@/assets/images/admin/icon_shelves_tv.png"
              alt="avatar"
            />
            <span class="font-medium text-xs">Bed</span>
          </li>
        </ul>
        <div class="table_order bg-white rounded-lg my-7">
          <table class="style-2 table table-hover font-medium">
            <thead>
              <tr class="text-sm">
                <th scope="col">Furniture</th>
                <th class="w-32"></th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td>2</td>
                <td>$1000</td>
                <td>$2000</td>
              </tr>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td>2</td>
                <td>$1000</td>
                <td>$2000</td>
              </tr>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td>2</td>
                <td>$1000</td>
                <td>$2000</td>
              </tr>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td>2</td>
                <td>$1000</td>
                <td>$2000</td>
              </tr>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td>2</td>
                <td>$1000</td>
                <td>$2000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <div class="mb-5 mb-xl-10 border-none bg-white shadow-md rounded-xl">
      <div class="graph px-7 py-7">
        <span class="card-label font-semibold text-dark text-lg block"
          >Furniture Sale Static</span
        >
        <p class="text-gray-400 pt-2 font-medium text-sm">
          Users from all channels
        </p>
        <div class="line_static mt-10">
          <Line :data="lineData2" :options="lineOptions2" />
        </div>
      </div>
    </div> -->
  </div>
  <div class="">
    <div class="grid grid-cols-6 mb-5 gap-x-8">
      <div
        class="col-span-2 mb-xxl-5 border-none bg-white shadow-md rounded-xl"
      >
        <div class="py-7 px-7">
          <span class="card-label font-semibold text-dark text-lg block"
            >Top Selling Furniture</span
          >
          <p class="text-sm font-medium text-gray-400">8k socail visitor</p>
        </div>
        <div class="table_FurOrder bg-white rounded-lg pl-6 mb-16">
          <table class="style-2 table table-hover font-medium">
            <thead>
              <tr class="text-sm">
                <th scope="col" class="p-0 w-50px pb-1">Furniture</th>
                <th class="ps-0 min-w-140px"></th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td><router-link to="">$72.00</router-link></td>
              </tr>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td><router-link to="">$72.00</router-link></td>
              </tr>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td><router-link to="">$72.00</router-link></td>
              </tr>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td><router-link to="">$72.00</router-link></td>
              </tr>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td><router-link to="">$72.00</router-link></td>
              </tr>
              <tr class="text-sm">
                <td>
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt="furniture"
                    class="w-20"
                  />
                </td>
                <td>
                  <span class="font-semibold block">Furniture 1</span>
                  <span class="text-xs">ID: 12234</span>
                </td>
                <td><router-link to="">$72.00</router-link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <span class="font-medium mx-8 text-sm">Count: 10</span>
      </div>
      <div class="col-span-4 mb-xl-5 border-none bg-white shadow-md rounded-xl">
        <div class="px-7 py-7">
          <span class="font-semibold text-dark text-lg">Furniture Orders</span>
        </div>
        <div class="categories pt-4">
          <ul class="flex text-sm font-medium">
            <li class="font-medium mr-8">Category</li>
            <li class="font-bold">
              <div class="dropdown cursor-pointer">
                <div
                  class="mr-8"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Show All <i class="bi bi-chevron-down text-xs"></i>
                </div>
                <ul
                  class="dropdown-menu leading-8 font-medium text-sm"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li><a class="dropdown-item" href="#">Show All</a></li>
                  <li><a class="dropdown-item" href="#">Clock</a></li>
                  <li><a class="dropdown-item" href="#">Shelves TV</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Bed</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Sofa</a></li>
                </ul>
              </div>
            </li>
            <li class="mr-8">Status</li>
            <li class="font-bold">
              <div class="dropdown cursor-pointer">
                <div
                  class="mr-8"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Show All <i class="bi bi-chevron-down text-xs"></i>
                </div>
                <ul
                  class="dropdown-menu leading-8 font-medium text-sm"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li class="status">
                    <a class="dropdown-item" href="#">Show All</a>
                  </li>
                  <li class="status">
                    <a class="dropdown-item" href="#">Pending</a>
                  </li>
                  <li class="status">
                    <a class="dropdown-item" href="#">Rejected</a>
                  </li>
                  <li class="status">
                    <a class="dropdown-item" href="#">Comfirmed</a>
                  </li>
                  <li class="status">
                    <a class="dropdown-item" href="#">Shiped</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <input
                placeholder="Searth..."
                type="text"
                name="text"
                class="input text-xs"
              />
            </li>
          </ul>

          <div class="table_FurOrder bg-white rounded-lg my-7">
            <table class="table table-hover font-medium text-center">
              <thead>
                <tr class="text-xs">
                  <th scope="col">ORDER ID</th>
                  <th class="w-32">CREATED</th>
                  <th scope="col">CUSTOMER</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-sm">
                  <td>1</td>
                  <td>22/10/2023</td>
                  <td><router-link to="">Minh Luu Thi</router-link></td>
                  <td>$1000</td>
                  <td>
                    <button
                      class="bg-green-100 text-green-500 px-1 py-1 rounded-md"
                    >
                      In Progress
                    </button>
                  </td>
                </tr>
                <tr class="text-sm">
                  <td>1</td>
                  <td>22/10/2023</td>
                  <td><router-link to="">Minh Luu Thi</router-link></td>
                  <td>$1000</td>
                  <td>
                    <button
                      class="bg-yellow-100 text-yellow-500 px-1 py-1 rounded-md"
                    >
                      Pending
                    </button>
                  </td>
                </tr>
                <tr class="text-sm">
                  <td>1</td>
                  <td>22/10/2023</td>
                  <td><router-link to="">Minh Luu Thi</router-link></td>
                  <td>$1000</td>
                  <td>
                    <button
                      class="bg-sky-100 text-sky-500 px-1 py-1 rounded-md"
                    >
                      Approved
                    </button>
                  </td>
                </tr>
                <tr class="text-sm">
                  <td>1</td>
                  <td>22/10/2023</td>
                  <td><router-link to="">Minh Luu Thi</router-link></td>
                  <td>$1000</td>
                  <td>
                    <button
                      class="bg-red-100 text-red-500 px-1 py-1 rounded-md"
                    >
                      Rejected
                    </button>
                  </td>
                </tr>
                <tr class="text-sm">
                  <td>1</td>
                  <td>22/10/2023</td>
                  <td><router-link to="">Minh Luu Thi</router-link></td>
                  <td>$1000</td>
                  <td>
                    <button
                      class="bg-red-100 text-red-500 px-1 py-1 rounded-md"
                    >
                      Rejected
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <span class="font-medium mx-8 text-sm">Count: 10</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import * as signalR from "@microsoft/signalr";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar } from "vue-chartjs";
import { Line } from "vue-chartjs";
import Chart from "chart.js/auto";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

export default {
  name: "App",
  components: {
    Bar,
    Line,
    // LineChart,
  },
  data() {
    return {
      dataNumber: {},
      title: "Furniture Dashboard",
      barData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Des",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [400, 100, 300, 500, 600, 700, 800, 900, 900, 1000, 500],
            backgroundColor: [
              "rgba(62, 151, 255, 0.85)",
              "rgba(241, 65, 108, 0.85)",
              "rgba(80, 205, 137, 0.85)",
              "rgba(255, 199, 0, 0.85)",
              "rgba(114, 57, 234, 0.85)",
              "rgba(63, 66, 84, 0.85)",
            ],
            // borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            // hoverBorderColor: "#000",
            borderRadius: 2,
            barPercentage: 1.0,
            categoryPercentage: 0.2,
          },
        ],
      },
      lineData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Des",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Looping tension",
            data: [65, 59, 80, 81, 26, 55, 40, 9, 19, 100, 11, 12],
            fill: false,
            // borderColor: "rgb(75, 192, 192)"
            borderColor: "rgb(163, 117, 57)",
          },
        ],
      },
      lineData2: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Des",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Looping tension",
            data: [650, 590, 800, 810, 260, 550, 400, 900, 190, 100, 110, 120],
            fill: false,
            borderColor: "rgb(163, 117, 57)",
          },
          {
            label: "Looping tension",
            data: [650, 590, 900, 110, 460, 750, 400, 90, 190, 1000, 110, 120],
            fill: false,
            borderColor: "rgb(247, 219, 183)",
          },
        ],
      },
      lineOptions2: {
        // animations: {
        //   tension: {
        //     duration: 1000,
        //     easing: "linear",
        //     from: 1,
        //     to: 0,
        //     loop: true,
        //   },
        // },
        // scales: {
        //   x: {
        //     type: "time",
        //     time: {
        //       // Luxon format string
        //       tooltipFormat: "DD T",
        //     },
        //     title: {
        //       display: true,
        //       text: "Date",
        //     },
        //   },
        //   y: {
        //     title: {
        //       display: true,
        //       text: "value",
        //     },
        //   },
        // },
        scales: {
          y: {
            min: 0,
            max: 1000,
          },
        },
      },
      lineOptions: {
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            min: 0,
            max: 100,
          },
        },
      },
      barOptions: {
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        // animations: {
        //   tension: {
        //     duration: 1000,
        //     easing: "linear",
        //     from: 1,
        //     to: 0,
        //     loop: true,
        //   },
        // },
        scales: {
          y: {
            min: 0,
            max: 1000,
          },
        },
      },
      pieData: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      doughnutData: {
        labels: ["Mục 1", "Mục 2", "Mục 3"],
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    };
  },
  created() {
    this.getNumber();
  },
  methods: {
    async getNumber() {
      try {
        const response = await axios.get("dashboard/assistant/statics");
        this.dataNumber = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    const doughnutChart = document.getElementById("doughnut");
    const dn = new Chart(doughnutChart, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
    dn;

    // Tạo kết nối SignalR khi thành phần được tải
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl("https://landlstore.azurewebsites.net/signalHub", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

    this.connection
      .start()
      .then(() => {
        console.log("Connected to hub");

        // Đăng ký sự kiện "ReceiveJWTToken"
        this.connection.on("ReceiveJWTToken", (message) => {
          console.log("Received message from hub:", message);
        });
      })
      .catch((err) => console.error(err));
  },
};
</script>
<style scoped>
.card .card-body {
  padding: 2rem 2.25rem;
}
.avatar_today_list {
  display: flex;
  padding-left: 18px;
}
.avatar_today_list img {
  border-radius: 50%;
  width: 80%;
}
.avatar_today_list li {
  margin-left: -16px;
}
/* .nav {
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: var(--bs-secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-pills {
  --bs-nav-pills-border-radius: var(--bs-border-radius);
  --bs-nav-pills-link-active-color: #ffffff;
  --bs-nav-pills-link-active-bg: #04c8c8;
} */
.nav.nav-pills li {
  width: 16%;
  border: 1px dashed rgb(77, 45, 16);
  border-radius: 7px;
  text-align: center;
}
.nav.nav-pills img {
  width: 45px;
  margin-left: 20%;
}
ul,
span,
table {
  color: rgb(82, 60, 20) !important;
}
.categories {
  margin-left: 30px;
}
.table_order {
  overflow: scroll;
  overflow-x: hidden;
  height: 297px;
}
td {
  padding-top: 10px;
}
table thead {
  border: hidden;
}
table thead th {
  font-weight: 600;
}
.table_order td {
  padding-top: 25px;
}
.table_order td img {
  margin-top: -22px;
}
.status {
  background-color: var(--bs-component-hover-bg);
  color: var(--bs-component-hover-color);
  transition: color 0.2s ease;
  position: relative;
}
.table_FurOrder {
  overflow: scroll;
  overflow-x: hidden;
  height: 422px;
}
.table_FurOrder td {
  padding-top: 15px;
}
/* search */
.input {
  max-width: 192px;
  height: 37px;
  padding: 12px;
  padding: 12px;
  border-radius: 9px;
  border: 1.5px solid lightgrey;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
  margin-top: -3em;
}

.input:hover {
  border: 2px solid lightgrey;
  box-shadow: 0px 0px 20px -17px;
}

.input:active {
  transform: scale(0.95);
}

.input:focus {
  border: 2px solid grey;
}
.table_FurOrder::-webkit-scrollbar-track,
.table_order::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.table_FurOrder::-webkit-scrollbar,
.table_order::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.table_FurOrder::-webkit-scrollbar-thumb,
.table_order::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cdc0aa;
}
canvas {
  height: 330px;
}
/* canvas {
  height: 366px;
  width: 756px;
} */
/* canvas #doughnut {
  height: 30px;
  width: 30px;
} */
</style>
