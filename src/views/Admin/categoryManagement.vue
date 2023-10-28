<template>
  <header-admin :title="title" />
  <div class="bg-white mb-2 rounded-xl mt-32">
    <div class="header pt-6 px-6">
      <div class="flex items-center justify-between">
        <search-admin />
        <div class="flex flex-cols-2 gap-x-3">
          <div
            class="dropdown bg-orange-50 shadow-lg bg-orange-100/50 px-2 py-2 rounded-lg"
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
              <li>
                <a class="dropdown-item font-medium" href="#">Latest User</a>
              </li>
              <li>
                <a class="dropdown-item font-medium" href="#">Old User</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="content_table pt-6 px-6 scroll">
      <div class="py-4">
        <table
          class="table table-borderless text-yellow-950 font-medium text-center"
        >
          <thead>
            <tr class="text-sm text-center">
              <th scope="col">ID</th>
              <th scope="col">Category Name</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Category 1</td>
              <td>
                <button
                  type="button"
                  class="button_add"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  @click="isShowAddModal = true"
                >
                  <span class="button__text text-xs">Add</span>
                  <span class="button__icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke="currentColor"
                      height="24"
                      fill="none"
                      class="svg"
                    >
                      <line y2="19" y1="5" x2="12" x1="12"></line>
                      <line y2="12" y1="12" x2="19" x1="5"></line></svg
                  ></span>
                </button>
                <modal
                  v-if="isShowAddModal"
                  @close="isShowAddModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div class="flex items-center text-lg font-medium">
                      ADD CATEGORY
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 px-4 text-sm">
                      <form @submit.prevent="Add">
                        <div>
                          <label for="exampleInputEmail1" class="form-label"
                            >Name Furniture</label
                          >
                          <input
                            v-model="categoryName"
                            type="text"
                            class="form-control"
                            id="exampleInpuName1"
                            aria-describedby="nameHelp"
                            required
                          />
                        </div>
                      </form>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <button
                      type="button"
                      class="btn btn-primary my-8"
                      @click.prevent="HandleAdd"
                    >
                      Save changes
                    </button>
                  </template>
                </modal>
              </td>
              <td>
                <button
                  class="button_edit"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  @click="isShowEditdModal = true"
                >
                  <span class="button__text text-xs">Edit</span>
                  <span class="button__icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      /></svg
                  ></span>
                </button>
                <modal
                  v-if="isEditModal"
                  @close="isEditModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <h1 class="flex items-center text-lg font-medium">
                      Edit Thi Furniture
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="py-1 px-4 text-sm">
                      <form @submit.prevent="">
                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Name Collection</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInpuName1"
                            aria-describedby="nameHelp"
                            required
                          />
                        </div>
                        <button type="submit" class="btn my-8">Edit</button>
                      </form>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="saveChanges"
                    >
                      Save changes
                    </button>
                  </template>
                </modal>
                <modal
                  v-if="isShowDeleteModal"
                  @close="isShowDeleteModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <h1 class="flex items-center text-lg font-medium">
                      Delete This Collection
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="py-1 px-4 text-sm">
                      <h1>Are you sure delete this furniture?</h1>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="saveChanges"
                    >
                      Yes
                    </button>
                  </template>
                </modal>
              </td>
              <td>
                <button
                  class="button_delete"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  @click="isShowDeleteModal = true"
                >
                  <span class="button__text text-xs">Delete</span>
                  <span class="button__icon"
                    ><svg
                      class="svg"
                      height="512"
                      viewBox="0 0 512 512"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path
                        d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                        style="
                          fill: none;
                          stroke: #fff;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-width: 32px;
                        "
                      ></path>
                      <line
                        style="
                          stroke: #fff;
                          stroke-linecap: round;
                          stroke-miterlimit: 10;
                          stroke-width: 32px;
                        "
                        x1="80"
                        x2="432"
                        y1="112"
                        y2="112"
                      ></line>
                      <path
                        d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                        style="
                          fill: none;
                          stroke: #fff;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-width: 32px;
                        "
                      ></path>
                      <line
                        style="
                          fill: none;
                          stroke: #fff;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-width: 32px;
                        "
                        x1="256"
                        x2="256"
                        y1="176"
                        y2="400"
                      ></line>
                      <line
                        style="
                          fill: none;
                          stroke: #fff;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-width: 32px;
                        "
                        x1="184"
                        x2="192"
                        y1="176"
                        y2="400"
                      ></line>
                      <line
                        style="
                          fill: none;
                          stroke: #fff;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-width: 32px;
                        "
                        x1="328"
                        x2="320"
                        y1="176"
                        y2="400"
                      ></line></svg
                  ></span>
                </button>
                <modal
                  v-if="isShowDeleteModal"
                  @close="isShowDeleteModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div class="flex items-center text-lg font-medium">
                      Delete
                    </div>
                  </template>
                  <template v-slot:body>
                    <p>Are you sure detete this category</p>
                  </template>
                  <template v-slot:footer>
                    <button
                      type="button"
                      class="btn btn-primary my-8"
                      @click.prevent="HandleDelete(ca)"
                    >
                      Yes
                    </button>
                  </template>
                </modal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <p class="text-sm font-medium mb-5">Total users: 5</p>

  <div class="loader"></div>
</template>
<script>
import axios from "axios";
import HeaderAdmin from "@/components/headerAdmin.vue";
import modal from "@/components/ModalPage.vue";
import SearchAdmin from "@/components/searchAdmin.vue";
export default {
  components: {
    HeaderAdmin,
    modal,
    SearchAdmin,
  },
  data() {
    return {
      isShowAddModal: false,
      isShowEditdModal: false,
      isShowDeleteModal: false,
      categories: [],
      newCategory: "",
    };
  },
  created() {
    this.getAllCategories();
  },
  methods: {
    async getAllCategories() {
      try {
        const response = await axios.get("/Assistant/shop-data/categories");
        this.categories = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async HandleAdd() {
      try {
        const response = await axios.post(
          "/Assistant/shop-data/categories/add?categoryName=" +
            this.categoryName
        );
        if (response.status === 201) {
          this.newCategory = response.data;
          this.isShowAddModal = false;
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async HandleUpdate(ca) {
      try {
        const response = await axios.put(
          "/Assistant/shop-data/categories/update?categoryId=" +
            ca.categoryId +
            "&categoryName=" +
            ca.categoryName
        );
        if (response.status === 200) {
          this.newCategory = response.data;
          this.isShowEditModal = false;
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async HandleDelete(ca) {
      try {
        const response = await axios.delete(
          "/Assistant/shop-data/categories/remove/" + ca.categoryId
        );
        if (response.status === 204) {
          this.isShowDeleteModal = false;
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.header {
  width: 67em;
}
.bar li {
  padding-right: 10px;
}
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
.form-control {
  border: none !important;
  background-color: #cecfd442;
}
form label,
form h1 {
  font-weight: 600;
  color: #422006;
}
/* loading image */
.loader_img_furniture {
  width: 64px;
  height: 64px;
  position: relative;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}

.loader_img_furniture:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  transform: rotate(45deg) translate(30%, 40%);
  background: #935a3c;
  box-shadow: 32px -34px 0 5px #652d0a;
  animation: slide 2s infinite ease-in-out alternate;
}

.loader_img_furniture:after {
  content: "";
  position: absolute;
  left: 10px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #652d0a;
  transform: rotate(0deg);
  transform-origin: 35px 145px;
  animation: rotate 2s infinite ease-in-out;
}

@keyframes slide {
  0%,
  100% {
    bottom: -35px;
  }

  25%,
  75% {
    bottom: -2px;
  }

  20%,
  80% {
    bottom: 2px;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-15deg);
  }

  25%,
  75% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(25deg);
  }
}
/* loading */
.loader {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}

.loader:before {
  animation: before8 2s infinite;
}

.loader:after {
  animation: after6 2s infinite;
}

@keyframes before8 {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }

  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75),
      0 0.5em rgba(111, 202, 220, 0.75);
  }

  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75),
      1em 0.5em rgba(111, 202, 220, 0.75);
  }

  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}

@keyframes after6 {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }

  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75),
      -0.5em 0 rgba(233, 169, 32, 0.75);
  }

  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75),
      -0.5em 1em rgba(233, 169, 32, 0.75);
  }

  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}

.loader {
  position: absolute;
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);
}
</style>
