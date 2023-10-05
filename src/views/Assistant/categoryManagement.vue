<template>
  <div class="px-3">
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">All Product</a></li>
          <li class="breadcrumb-item active" aria-current="page">Sofa</li>
        </ol>
      </nav>
    </div>
    <div class="pt-3">
      <table
        class="table table-hover border border-gray-900 text-center text-slate-600 bg-gray-50"
      >
        <thead>
          <tr class="text-sm text-center">
            <th scope="col">Id</th>
            <th scope="col">Category Name</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="categories.length">
          <tr class="text-sm" v-for="ca in categories" :key="ca.categoryId">
            <th scope="row">{{ ca.categoryId }}</th>
            <td>{{ ca.categoryName }}</td>
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
                    width="48"
                    viewBox="0 0 48 48"
                    height="48"
                    class="svg"
                  >
                    <path
                      d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"
                    ></path>
                    <path fill="none" d="M0 0h48v48h-48z"></path></svg
                ></span>
              </button>
              <modal
                v-if="isShowEditdModal"
                @close="isShowEditdModal = false"
                data-target="#myModal"
              >
                <template v-slot:title>
                  <div class="flex items-center text-lg font-medium">
                    Edit CATEGORY
                  </div>
                </template>
                <template v-slot:body>
                  <div class="py-3 px-4 text-sm">
                    <form>
                      <div>
                        <label for="exampleInputEmail1" class="form-label"
                          >Name Furniture</label
                        >
                        <input
                          v-model="ca.categoryName"
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
                    @click.prevent="HandleUpdate(ca)"
                  >
                    Update
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
      <p class="px-1 text-sm pb-10">Total furniture: 10</p>
    </div>
  </div>
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
