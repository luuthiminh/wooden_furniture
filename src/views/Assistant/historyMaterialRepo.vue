<template>
  <div class="">
    <div class="nav mt-14">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-5 font-medium">
          <li class="breadcrumb-item text-sm">
            <router-link to="/indexAssistant">Home</router-link>
          </li>
          <li class="breadcrumb-item text-sm active" aria-current="page">
            Manage Material
          </li>
        </ol>
      </nav>
    </div>
    <div class="content_table pt-4 px-10 scroll">
      <div class="font-semibold text-lg pb-3">
        History Repositories Material
      </div>
      <span class="font-medium text-xs"
        >You can download the entire imported material in CSV
      </span>
      <div class="flex mb-4 mt-3">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="font-semibold">Totally Materials:</p>
          {{ historyMaterial.length }}
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
          <div class="flex flex-cols-2 gap-x-3">
            <div
              class="dropdown bg-orange-50 shadow-sm bg-orange-100/50 px-2 py-2 rounded-lg"
            >
              <button
                class="btn_action flex"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-orange-500 mt-1 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>

                <span class="text-orange-500 font-medium">Filter</span>
              </button>
              <ul
                class="dropdown-menu text-sm"
                aria-labelledby="dropdownMenuButton1"
              >
                <li
                  class="px-2 font-medium py-1 cursor-pointer"
                  v-for="re in reponsitories"
                  :key="re.repositoryId"
                  @click="HandleChooseRepository(re.repositoryId)"
                >
                  {{ re.repositoryName }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4">
        <table
          v-if="historyMaterial.length"
          class="table table-borderless text-yellow-950 font-medium bg-white round-md"
        >
          <thead class="table-light">
            <tr class="text-sm">
              <th scope="col">ID</th>
              <th scope="col">Material Name</th>
              <th scope="col">Repository ID</th>
              <th scope="col">Type</th>
              <th scope="col">Assistant Id</th>
              <th scope="col">Quantity</th>
              <th scope="col">Descrition</th>
              <th scope="col">CreationDate</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-sm"
              v-for="hm in historyMaterial"
              :key="hm.materialRepositoryHistoryId"
            >
              <td>{{ hm.materialRepositoryHistoryId }}</td>
              <td>{{ hm.materialName }}</td>
              <td>{{ hm.repositoryId }}</td>
              <td>{{ hm.type }}</td>
              <td>{{ hm.assistantId }}</td>
              <td>{{ hm.quantity }}</td>
              <td>{{ hm.descrition }}</td>
              <td>{{ hm.creationDate }}</td>
            </tr>
          </tbody>
        </table>
        <loadding v-else />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import axios from "axios";
import { format } from "date-fns";
import loadding from "@/components/loaddingAssistant.vue";
export default {
  components: {
    loadding,
  },
  data() {
    return {
      historyMaterial: [],
      reponsitories: [],
      repositoryId: 1,
    };
  },
  created() {
    this.getHistory();
    this.getAllReponsitorys();
  },
  methods: {
    async getAllReponsitorys() {
      try {
        const response = await axios.get("assistant/warehouse/repositories");
        this.reponsitories = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getHistory() {
      try {
        const response = await axios.get(
          "assistant/warehouse/repositories/" +
            this.repositoryId +
            "/material-repository-history"
        );
        if (response.status == 200) {
          this.historyMaterial = response.data;
          for (let i = 0; i < this.historyMaterial.length; i++) {
            const date = new Date(this.historyMaterial[i].creationDate);
            this.historyMaterial[i].creationDate = format(date, "dd/MM/yyyy");
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    HandleChooseRepository(st) {
      this.repositoryId = st;
      this.getHistory();
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
  width: 100%;
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
table {
  overflow: scroll;
  width: 88em;
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
