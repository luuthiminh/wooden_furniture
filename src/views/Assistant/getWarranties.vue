<template>
  <div class="">
    <div class="nav mt-14">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 ml-4 font-medium">
          <li class="breadcrumb-item text-sm font-semibold">
            <router-link to="/indexAssistant">Home</router-link>
          </li>
          <li class="breadcrumb-item text-sm active" aria-current="page">
            All Gurranties
          </li>
        </ol>
      </nav>
    </div>
    <div class="font-semibold text-lg ml-4 pt-4">All Gurranties</div>
    <div class="content_table pt-6 px-6 scroll">
      <div class="py-4">
        <table
          v-if="warranties.length"
          class="table table-borderless text-yellow-950 font-medium text-center"
        >
          <thead class="table-light">
            <tr class="text-sm text-center">
              <th>ID</th>
              <th scope="col">Warranty</th>
              <th scope="col">CustomerName</th>
              <th scope="col">OrderId</th>
              <th scope="col">Reasons</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-sm" v-for="w in warranties" :key="w.warrantyId">
              <td>{{ w.warrantyId }}</td>
              <td class="img">
                <div v-for="img in w.images" :key="img">
                  <img :src="img.path" alt="furniture" class="w-20" />
                </div>
                <div v-for="img in w.videos" :key="img">
                  <img :src="img.path" alt="furniture" class="w-20" />
                </div>
              </td>

              <td>{{ w.customerName }}</td>
              <td>{{ w.orderId }}</td>
              <td>{{ w.warrantyReasons }}</td>
            </tr>
          </tbody>
        </table>
        <loadding v-else />
      </div>
    </div>
  </div>
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
      isShowFurnitureSpecification: false,
      isEditModal: false,
      warranties: [],
      isAddFurniture: false,
    };
  },
  created() {
    this.getWarranty();
  },
  methods: {
    async getWarranty() {
      try {
        const response = await axios.get(
          "Assistant/customer-requests/warranties"
        );
        this.warranties = response.data;
        this.warranties = response.data.map((item) => ({
          ...item,
          estimatedTime: item.estimatedTime
            ? format(new Date(item.estimatedTime), "dd/MM/yyyy")
            : "",
        }));
      } catch (error) {
        console.error(error);
      }
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
</style>
