<template>
  <header-admin :title="title" />
  <div class="grid grid-cols-2 gap-x-8 max-md:block mt-32 mr-2">
    <div class="grid grid-cols-2 gap-x-8">
      <div>
        <div
          class="card overflow-hidden h-md-50 mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl"
        >
          <div
            class="card-body flex justify-content-between flex-column px-0 p-0 bg-white h-32"
          >
            <div class="mb-4 px-7">
              <!-- <div class="text-blue-500 bg-blue-400 h-1"></div> -->
              <div class="bg-yellow-700 h-1"></div>
              <p class="text-base font-medium text-gray-400 py-6">
                Profit this month
              </p>

              <div class="d-flex align-items-center mb-2">
                <span
                  class="text-sm font-semibold text-gray-400 align-self-start me-1>"
                  >$</span
                >
                <span class="text-2xl font-semibold text-gray-800 me-2 lh-1">{{
                  dataNumber.profit
                }}</span>
                <!-- <div class="badge bg-gradient-to-r from-cyan-500 to-blue-500">
                  <i class="bi bi-arrow-up text-white text-sm"></i>
                  2.2%
                </div> -->
                <div
                  class="badge badge bg-gradient-to-r from-purple-500 to-pink-500"
                >
                  <i class="bi bi-arrow-down text-white text-sm"></i>
                  2.2%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card overflow-hidden h-md-50 mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl"
        >
          <div
            class="card-body flex justify-content-between flex-column px-0 p-0 bg-white h-32"
          >
            <div class="mb-4 px-7">
              <div class="bg-slate-600 h-1"></div>
              <!-- <div class="bg-yellow-700 h-1"></div> -->
              <p class="text-base font-medium text-gray-400 py-6">
                Total Furniture
              </p>

              <div class="d-flex align-items-center mb-2">
                <span class="text-2xl font-semibold text-gray-800 me-2 lh-1">{{
                  dataNumber.totalFurniture
                }}</span>
                <div class="badge bg-gradient-to-r from-cyan-500 to-blue-500">
                  <i class="bi bi-arrow-up text-white text-sm"></i>
                  2.2%
                </div>
                <!-- <div class="badge badge bg-gradient-to-r from-purple-500 to-pink-500">
                  <i class="bi bi-arrow-down text-white text-sm"></i>
                  2.2%
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="card overflow-hidden h-md-50 mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl"
        >
          <div
            class="card-body flex justify-content-between flex-column px-0 p-0 bg-white h-32"
          >
            <div class="mb-4 px-7">
              <div class="bg-slate-600 h-1"></div>
              <!-- <div class="bg-yellow-700 h-1"></div> -->
              <p class="text-base font-medium text-gray-400 py-6">
                Order this month
              </p>

              <div class="d-flex align-items-center mb-2">
                <span class="text-2xl font-semibold text-gray-800 me-2 lh-1">{{
                  dataNumber.orderInCurrentMonth
                }}</span>
                <div class="badge bg-gradient-to-r from-cyan-500 to-blue-500">
                  <i class="bi bi-arrow-up text-white text-sm"></i>
                  2.2%
                </div>
                <!-- <div class="badge badge bg-gradient-to-r from-purple-500 to-pink-500">
                  <i class="bi bi-arrow-down text-white text-sm"></i>
                  2.2%
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <div
          class="card overflow-hidden h-md-50 mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl"
        >
          <div
            class="card-body flex justify-content-between flex-column px-0 p-0 bg-white h-32"
          >
            <div class="mb-4 px-7">
              <div class="bg-yellow-700 h-1"></div>
              <!-- <div class="bg-blue-400 h-1"></div> -->
              <p class="text-base font-medium text-gray-400 py-3">
                Account Customer this month
              </p>

              <div class="d-flex align-items-center mb-2">
                <span class="text-2xl font-semibold text-gray-800 me-2 lh-1">{{
                  dataNumber.customerAccount
                }}</span>
                <!-- <div class="badge bg-gradient-to-r from-cyan-500 to-blue-500">
                  <i class="bi bi-arrow-up text-white text-sm"></i>
                  2.2%
                </div> -->
                <div
                  class="badge badge bg-gradient-to-r from-purple-500 to-pink-500"
                >
                  <i class="bi bi-arrow-down text-white text-sm"></i>
                  2.2%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl">
      <div class="graph px-7 pt-24">
        <span class="card-label font-semibold text-dark text-lg block"
          >Top selling wood furniture</span
        >
        <p class="text-gray-400 pt-2 font-medium text-sm">(This month)</p>
      </div>

      <div class="py-2">
        <div class="w-56 mt-4">
          <canvas
            id="doughnut"
            aria-label="Hello ARIA World"
            role="img"
          ></canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-x-8">
    <div class="mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl">
      <div class="graph px-7 py-7">
        <div class="graph pb-3">
          <span class="card-label font-semibold text-dark text-lg block"
            >Expense and Revenue</span
          >
          <p class="text-gray-400 pt-2 font-medium text-sm">(for each month)</p>
        </div>
        <div class="line_static mt-32">
          <Line v-if="loaded" :data="lineProfit" :options="lineOptionsProfit" />
        </div>
      </div>
    </div>

    <div class="mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl">
      <div class="graph px-7 py-7">
        <span class="card-label font-semibold text-dark text-lg block"
          >Top Selling Categories</span
        >
        <p class="text-gray-400 pt-2 font-medium text-sm">(with this month)</p>
      </div>
      <!-- <div class="px-9 py-2">
        <span class="text-3xl font-semibold text-gray-800 me-2 lh-1 block"
          >9,700</span
        >
        <p class="text-sm font-medium text-gray-400">Orders This Month</p>
      </div> -->
      <div class="px-9 py-2">
        <Bar v-if="loaded" :data="barDataCate" :options="barOptionsCate" />
      </div>
    </div>
  </div>
  <div class="mb-5 mb-xl-10 border-none bg-white shadow-md rounded-xl">
    <div class="graph px-7 py-7">
      <span class="card-label font-semibold text-dark text-lg block"
        >Orders Static</span
      >
      <p class="text-gray-400 pt-2 font-medium text-sm">This Month</p>
    </div>
    <div class="px-9 py-2">
      <span class="text-3xl font-semibold text-gray-800 me-2 lh-1 block"
        >9,700</span
      >
    </div>
    <div class="line_static mt-10 px-20 h-96 pb-10">
      <Line v-if="loaded" :data="lineDataUser" :options="lineOptionsUser" />
      <!-- <Line :data="lineData" :options="lineOptions" /> -->
    </div>
  </div>
  <div class="grid grid-cols-2 gap-x-7">
    <div class="col-span-1 mb-xxl-5 border-none bg-white shadow-md rounded-xl">
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
    <div class="col-span-1 mb-xxl-5 border-none bg-white shadow-md rounded-xl">
      <div class="py-7 px-7">
        <span class="card-label font-semibold text-dark text-lg block"
          >Top WishList</span
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
  </div>
</template>
<script>
import HeaderAdmin from "@/components/headerAdmin.vue";
import axios from "axios";
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
    HeaderAdmin,
    Bar,
    Line,
  },
  data() {
    return {
      dataNumber: {},
      spent: [],
      topTable: [],
      income: [],
      loaded: false,
      lineProfit: null,
      barDataCate: null,
      lineDataUser: null,
      categoriesData: {},
      woodData: {},
      title: "Admin Dashboard",

      lineOptionsProfit: {
        animations: {
          tension: {
            duration: 20000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            min: 0,
            max: 20000,
          },
        },
      },
      barOptionsCate: {
        indexAxis: "y",
        // elements: {
        //   bar: {
        //     borderWidth: 2,
        //   },
        // },
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
      lineOptionsUser: {
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
            max: 20000,
          },
        },
      },
    };
  },
  created() {
    this.getNumber();
    this.getTopSaleFurniture();
  },
  methods: {
    async getNumber() {
      try {
        const response = await axios.get("dashboard/shop-owner/statics");
        this.dataNumber = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getTopSaleFurniture() {
      try {
        const response = await axios.get("dashboard/shop-owner/tables");
        this.topTable = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    this.loaded = false;
    try {
      const responseChart = await axios.get("dashboard/shop-owner/charts");
      const responseCategories = await axios.get(
        "shopOwner/shop-data/categories"
      );
      const listCategories = responseCategories.data.map(
        (item) => item.categoryName
      );
      this.spent = responseChart.data.spentInYear;
      this.income = responseChart.data.income;

      //Load data
      this.loaded = true;
      this.lineProfit = {
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
            label: "Revenue",
            data: this.income,
            fill: false,
            borderColor: "rgb(163, 117, 57)",
          },
          {
            label: "Expenditure",
            data: this.spent,
            fill: false,
            borderColor: "rgb(247, 219, 183)",
          },
        ],
      };
      //Top Selling Categories
      this.barDataCate = {
        labels: listCategories,
        datasets: [
          {
            data: this.categoriesData,
            backgroundColor: [
              "rgba(62, 151, 255, 0.85)",
              "rgba(241, 65, 108, 0.85)",
              "rgba(80, 205, 137, 0.85)",
              "rgba(255, 199, 0, 0.85)",
              "rgba(114, 57, 234, 0.85)",
              "rgba(63, 66, 84, 0.85)",
            ],
            borderColor: "#777",
            hoverBorderWidth: 3,
            borderRadius: 2,
            barPercentage: 1.0,
            categoryPercentage: 0.5,
          },
        ],
      };
      this.lineDataUser = {
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
            label: "customer",
            data: responseChart.data.newAccountInYear,
            fill: false,
            borderColor: "rgb(163, 117, 57)",
          },
        ],
      };

      const doughnutChart = document.getElementById("doughnut");
      const dn = new Chart(doughnutChart, {
        type: "doughnut",
        data: {
          labels: [
            "Red",
            "Blue",
            "Yellow",
            "Yellow",
            "Yellow",
            "Yellow",
            "Yellow",
          ],
          datasets: [
            {
              label: "My First Dataset",
              data: this.woodData,
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
    } catch (error) {
      console.error(error);
    }
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
</style>
