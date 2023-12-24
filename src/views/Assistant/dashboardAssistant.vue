<template>
  <div class="max-md:block mt-28">
    <div class="grid grid-cols-5 gap-x-8 px-10">
      <div>
        <div
          class="card overflow-hidden h-md-50 mb-4 mb-xl-10 ring-1 ring-yellow-800/30 bg-white shadow- rounded-xl"
        >
          <div
            class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
          >
            <div class="mb-4 px-3">
              <div class="d-flex align-items-center mb-2">
                <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                  dataNumber.materialTotal
                }}</span>
              </div>

              <p class="text-sm font-medium text-gray-500">Totally Materials</p>
              <p class="text-xs font-medium text-gray-500">
                (in the warehouse)
              </p>
            </div>
            <div
              class="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 h-14 items-center flex justify-center"
            >
              <i class="bi bi-database text-yellow-700 text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card overflow-hidden h-md-50 mb-4 mb-xl-10 ring-1 ring-yellow-800/30 bg-white shadow- rounded-xl"
      >
        <div
          class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
        >
          <div class="mb-4 px-3">
            <div class="d-flex align-items-center mb-2">
              <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                dataNumber.furnitureTotal
              }}</span>
            </div>

            <p class="text-sm font-medium text-gray-500">Total Furniture</p>
            <p class="text-xs font-medium text-gray-500">(in the warehouse)</p>
          </div>
          <div
            class="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 h-14 items-center flex justify-center"
          >
            <i class="bi bi-shop-window text-yellow-700 text-2xl"></i>
          </div>
        </div>
      </div>
      <div
        class="card overflow-hidden h-md-50 mb-4 mb-xl-10 ring-1 ring-yellow-800/30 bg-white shadow- rounded-xl"
      >
        <div
          class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
        >
          <div class="mb-4 px-3">
            <div class="d-flex align-items-center mb-2">
              <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                dataNumber.spent
              }}</span>
            </div>

            <p class="text-sm font-medium text-gray-500">Total Expenses</p>
            <p class="text-xs font-medium text-gray-500">(material)</p>
          </div>
          <div
            class="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 h-14 items-center flex justify-center"
          >
            <i class="bi bi-cash-coin text-yellow-700 text-2xl"></i>
          </div>
        </div>
      </div>
      <div>
        <div
          class="card overflow-hidden h-md-50 mb-4 mb-xl-10 ring-1 ring-yellow-800/30 bg-white shadow- rounded-xl"
        >
          <div
            class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
          >
            <div class="mb-4 px-3">
              <div class="d-flex align-items-center mb-2">
                <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                  dataNumber.materialExportTime
                }}</span>
              </div>
              <p class="text-sm font-medium text-gray-500">
                Total Export Material
              </p>
            </div>
            <div
              class="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 h-11 items-center flex justify-center"
            >
              <i class="bi bi-database-down text-yellow-700 text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card overflow-hidden h-md-50 mb-4 mb-xl-10 ring-1 ring-yellow-800/30 bg-white shadow- rounded-xl"
      >
        <div
          class="card-body flex justify-content-between flex-column px-0 pb-0 bg-white h-44"
        >
          <div class="mb-4 px-3">
            <div class="d-flex align-items-center mb-2">
              <span class="text-3xl font-semibold text-gray-800 me-2 lh-1">{{
                dataNumber.furnitureExportTime
              }}</span>
            </div>

            <p class="text-sm font-medium text-gray-500">
              Total Export Furniture
            </p>
          </div>
          <div
            class="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 h-14 items-center flex justify-center"
          >
            <i class="bi bi-database-down text-yellow-700 text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-x-8 px-10">
      <div class="mb-4 mb-xl-10 border-none bg-white shadow-md rounded-xl">
        <div class="graph px-7 py-7">
          <span class="card-label font-semibold text-dark text-lg block"
            >All Order</span
          >
        </div>
        <div class="px-9 py-2">
          <p class="text-sm font-medium text-gray-400">This Month</p>
        </div>
        <div class="px-9 py-2">
          <Bar v-if="loaded" :data="barDataOrder" :options="barOptionsOrder" />
          <loadding v-else />
        </div>
      </div>
      <div class="mb-5 mb-xl-10 border-none bg-white shadow-md rounded-xl">
        <div class="graph px-7 py-7">
          <span class="card-label font-semibold text-dark text-lg block"
            >Furniture Sale Statict</span
          >

          <div class="line_static mt-10">
            <Line
              v-if="loaded"
              :data="lineDataFurniture"
              :options="lineOptionsFurnitrue"
            />
            <loadding v-else />
          </div>
        </div>
      </div>
    </div>
    <div class="px-10">
      <div class="mb-5 mb-xl-10 border-none bg-white shadow-md rounded-xl">
        <div class="graph px-7 py-7">
          <span class="card-label font-semibold text-dark text-lg block"
            >Material Imported Static</span
          >
          <p class="text-gray-400 pt-2 font-medium text-sm">this year</p>
          <div class="line_static mt-10">
            <Line
              v-if="loaded"
              :data="lineDataMaterial"
              :options="lineOptionsMaterial"
            />
            <loadding v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import * as signalR from "@microsoft/signalr";
import loadding from "@/components/loaddingAssistant.vue";
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
    loadding,
  },
  data() {
    return {
      dataNumber: {},
      loaded: false,
      lineDataMaterial: null,
      barDataOrder: null,
      lineDataFurniture: null,
      title: "Furniture Dashboard",

      lineOptionsMaterial: {},
      lineOptionsFurniture: {
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
      barOptionsOrder: {
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
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
  async mounted() {
    this.loaded = false;
    try {
      const responseChart = await axios.get("dashboard/assistant/charts");
      const responseSup = await axios.get("shopOwner/shop-data/suppliers");
      const listSup = responseSup.data.map((item) => item.supplierName);
      const dataTopSup = responseChart.data.topSupplier.map(
        (item) => item.data
      );
      console.log(listSup);
      this.loaded = true;
      var labelsOrder = Object.keys(responseChart.data.orderStatus);
      var dataOrder = Object.values(responseChart.data.orderStatus);
      this.barDataOrder = {
        labels: labelsOrder,
        datasets: [
          {
            label: "My First Dataset",
            data: dataOrder,
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
      };
      this.lineDataMaterial = {
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
            data: responseChart.data.materialImportTimeAnnually,
            fill: false,
            // borderColor: "rgb(75, 192, 192)"
            borderColor: "rgb(163, 117, 57)",
          },
        ],
      };
      this.lineDataFurniture = {
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
            data: responseChart.data.furnitureImportTimeAnnually,
            fill: false,
            borderColor: "rgb(163, 117, 57)",
          },
        ],
      };

      const doughnutChart = document.getElementById("doughnut");
      const dn = new Chart(doughnutChart, {
        type: "doughnut",
        data: {
          labels: listSup,
          datasets: [
            {
              label: "My First Dataset",
              data: dataTopSup,
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
