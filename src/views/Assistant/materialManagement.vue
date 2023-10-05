<template>
  <header-admin :title="title" />
  <button type="button" class="button float-right text-xs my-3">
    <span class="button__text">Add Item</span>
    <span
      class="button__icon"
      data-toggle="modal"
      data-target="#exampleModalLong"
      @click.prevent="isAddFurniture = true"
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
  <modal @close="closeModal">
    <template v-slot:title>
      <div class="flex items-center text-lg font-medium">Add New Furniture</div>
    </template>
    <template v-slot:body>
      <div class="py-3 px-4 text-sm">
        <form @submit.prevent="" class="">
          <div class="addFurniture grid grid-cols-2 gap-x-4">
            <div>
              <label for="exampleInputEmail1" class="form-label font-medium"
                >Name Furniture</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label font-medium"
                >Price</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-x-4 mt-3">
            <div>
              <label for="exampleInputEmail1" class="form-label font-medium"
                >Collection</label
              >
              <select
                class="form-select text-sm"
                aria-label="Default select example"
              >
                <option selected>Choose a collection</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label font-medium"
                >Label</label
              >
              <select
                class="form-select text-sm"
                aria-label="Default select example"
              >
                <option selected>Choose a label</option>
                <option value="1">New</option>
                <option value="2">Hot Sale</option>
              </select>
            </div>
          </div>
          <div class="mt-3">
            <label for="exampleInputEmail1" class="form-label font-medium"
              >Appropriate Room</label
            >
            <select
              class="form-select text-sm"
              aria-label="Default select example"
            >
              <option selected>Choose room</option>
              <option value="1">Bed Room</option>
              <option value="2">Hot Sale</option>
            </select>
          </div>
          <div class="mt-3">
            <label for="exampleInputEmail1" class="form-label font-medium"
              >Sold</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div class="flex gap-x-3 mt-3">
            <label for="exampleInputEmail1" class="form-label font-medium mt-24"
              >Image</label
            >
            <form class="modal_uploadfile">
              <div class="content">
                <span class="title">Upload a File</span>
                <p class="message">
                  Select a file to upload from your computer or device.
                </p>

                <div class="actions">
                  <label for="file" class="button upload-btn"
                    >Choose File
                    <input hidden="" type="file" id="file" />
                  </label>
                </div>
                <div class="result">
                  <div class="file-uploaded"><p>profile_pic.png</p></div>
                </div>
              </div>
            </form>
          </div>
        </form>
      </div>
    </template>
    <template v-slot:footer>
      <button
        data-dismiss="modal"
        @click.prevent="HandleAddFurniture"
        type="button"
        class="button_addfurniture text-white bg-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-600"
      >
        Add
      </button>
    </template>
  </modal>
  <div class="pt-3">
    <table
      class="table table-hover border border-gray-900 text-center text-slate-600 bg-gray-50"
    >
      <thead>
        <tr class="text-sm text-center">
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-if="furnitures.length">
        <tr
          class="text-sm"
          v-for="furniture in furnitures"
          :key="furniture.furnitureId"
        >
          <th scope="row">{{ furniture.furnitureId }}</th>
          <td>{{ furniture.furnitureName }}</td>
          <td>{{ furniture.price }}</td>
          <td>{{ furniture.description }}</td>
          <td>{{ furniture.image }}</td>
          <td class="flex gap-x-4">
            <i
              class="fa-solid fa-info px-1 py-1 cursor-pointer"
              data-toggle="modal"
              data-target="#exampleModalLong"
              @click="showModal(furniture)"
            ></i>

            <modal v-if="isShowFurnitureSpecification" @close="closeModal">
              <template v-slot:title>
                <div class="flex items-center text-lg font-medium">
                  ALL Furniture
                </div>
              </template>
              <template v-slot:body>
                <div
                  class="product"
                  v-for="fur in furnitureModel"
                  :key="fur.furnitureId"
                >
                  <div class="grid grid-cols-2 gap-x-7">
                    <div class="image_product">
                      <img
                        src="@/assets/images/category/shelves_tv/shelves_11.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div class="name furniture font-semibold pb-3 text-sm">
                        {{ fur.furnitureName }}
                      </div>
                      <div class="grid grid-cols-2 gap-x-1 text-sm">
                        <span>Height</span>
                        <span>{{ fur.height }}</span>
                      </div>
                      <div class="grid grid-cols-2 gap-x-1 text-sm pt-1">
                        <span>Width:</span>
                        <span>{{ fur.width }}</span>
                      </div>
                      <div class="grid grid-cols-2 gap-x-1 text-sm pt-1">
                        <span>Lenght:</span>
                        <span>{{ fur.length }}</span>
                      </div>
                      <div class="text-sm">
                        <div class="grid grid-cols-2 gap-x-1 text-sm pt-1">
                          <span>Price:</span>
                          <span>{{ fur.price }}</span>
                          <!-- <span>$1000</span> -->
                          <span class="text-red-500">$2000</span>
                        </div>
                      </div>
                      <div class="grid grid-cols-2 gap-x-1 text-sm pt-1">
                        <span>Color:</span>
                        <span>{{ fur.color }}</span>
                      </div>
                      <div class="grid grid-cols-2 gap-x-1 text-sm pt-1">
                        <span>Wood:</span>
                        <span>{{ fur.wood }}</span>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </template>
              <template v-slot:footer></template>
            </modal>
            <!-- Modal Edit -->
            <i
              type="button"
              class="fa-solid fa-pen-to-square cursor-pointer pt-1"
              data-toggle="modal"
              data-target="#exampleModalLong"
              @click="isEditModal = true"
            >
            </i>

            <modal
              v-if="isEditModal"
              @close="isEditModal = false"
              data-target="#myModal"
            >
              <template v-slot:title>
                <div class="flex items-center text-lg font-medium">
                  Edit Furniture
                </div>
              </template>
              <template v-slot:body>
                <div class="py-3 px-4 text-sm">
                  <form @submit.prevent="">
                    <!-- <div class="grid grid-cols-2 gap-x-4"> -->
                    <div>
                      <label for="exampleInputEmail1" class="form-label"
                        >Name Furniture</label
                      >
                      <input
                        v-model="furniture.furnitureName"
                        type="text"
                        class="form-control"
                        id="exampleInpuName1"
                        aria-describedby="nameHelp"
                        required
                      />
                    </div>
                    <div>
                      <label for="exampleInputEmail1" class="form-label"
                        >Price</label
                      >
                      <input
                        v-model="furniture.price"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <!-- </div> -->
                    <div>
                      <label for="exampleInputEmail1" class="form-label"
                        >Category</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div>
                      <label for="exampleInputEmail1" class="form-label"
                        >Quantity</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div>
                      <label for="exampleInputEmail1" class="form-label"
                        >Material</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div>
                      <label for="exampleInputEmail1" class="form-label"
                        >Description</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="flex gap-x-3 mt-3">
                      <label for="exampleInputEmail1" class="form-label mt-10"
                        >Image</label
                      >
                      <div class="img flex">
                        <img
                          class="image_default pr-10"
                          src="@/assets/images/image_default.jpg"
                          alt="furniture"
                        />
                        <input
                          type="file"
                          id="myFile"
                          class="mt-10"
                          name="filename"
                        />
                        <!-- <input type="submit" /> -->
                      </div>
                    </div>
                    <button type="submit" class="btn my-8">Add</button>
                  </form>
                </div>
              </template>
              <template v-slot:footer>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="saveChanges"
                >
                  Save changes
                </button>
              </template>
            </modal>
            <!-- delete -->
            <button class="btn_delete">
              <svg
                viewBox="0 0 15 17.5"
                height="12.5"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
              >
                <path
                  transform="translate(-2.5 -1.25)"
                  d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                  id="Fill"
                ></path>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="px-1 text-sm pb-10">Total furniture: {{ furnitures.length }}</p>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>
<script>
import axios from "axios";
import modal from "@/components/ModalPage.vue";
import HeaderAdmin from "@/components/headerAdmin.vue";
export default {
  components: {
    modal,
    HeaderAdmin,
  },
  data() {
    return {
      isShowFurnitureSpecification: false,
      furnitures: [],
      isEditModal: false,
      furnitureModel: [],
      title: "All Materials",
    };
  },
  created() {
    this.getFurnitures();
  },
  methods: {
    async getFurnitures() {
      try {
        const response = await axios.get("/customer/furnitures");
        this.furnitures = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    closeModal() {
      this.isShowFurnitureSpecification = false;
      this.isEditModal = false;
    },
    async showModal(furniture) {
      this.isShowFurnitureSpecification = true;
      try {
        const response = await axios.get(
          "customer/furnitures/" + furniture.furnitureId
        );
        this.furnitureModel = response.data;
        console.log(furniture);
      } catch (error) {
        console.error(error);
      }
    },
    saveChanges() {
      // Xử lý khi nhấn nút "Lưu thay đổi" trong modal
      this.closeModal(); // Đóng modal sau khi lưu thay đổi (có thể sửa đổi thành xử lý lưu thay đổi thực tế)
    },
  },
};
</script>
<style scoped>
/* icon_more */
.fa-solid.fa-info {
  background-color: transparent;
  position: relative;
  border: none;
}
.fa-solid.fa-info::after {
  content: "more";
  position: absolute;
  top: -200%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  background: #58b35e;
  padding: 4px 8px;
  border-radius: 3px;
  transition: 0.2s linear;
  transition-delay: 0.2s;
  color: white;
  text-transform: uppercase;
  font-size: 8px;
  opacity: 0;
  visibility: hidden;
  font-weight: 100;
  font-family: inherit;
}
.fa-solid.fa-info:hover {
  transform: scale(1.5);
}
.fa-solid.fa-info:hover {
  fill: rgb(168, 7, 7);
}

.fa-solid.fa-info:hover::after {
  visibility: visible;
  opacity: 1;
  top: -70%;
}
/* icon delete */
.btn_delete {
  background-color: transparent;
  position: relative;
  border: none;
}

.btn_delete::after {
  content: "delete";
  position: absolute;
  top: -300%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  background-color: rgb(168, 7, 7);
  padding: 4px 8px;
  border-radius: 5px;
  transition: 0.2s linear;
  transition-delay: 0.2s;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
}

.icon {
  transform: scale(1.2);
  transition: 0.2s linear;
}

.btn_delete:hover > .icon {
  transform: scale(1.5);
}

.btn_delete:hover > .icon path {
  fill: rgb(168, 7, 7);
}

.btn_delete:hover::after {
  visibility: visible;
  opacity: 1;
  top: -150%;
}

/* icon_edit */
.fa-solid.fa-pen-to-square {
  background-color: transparent;
  position: relative;
  border: none;
}
.fa-solid.fa-pen-to-square::after {
  content: "edit";
  position: absolute;
  top: -200%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  background: #d1d110;
  padding: 4px 8px;
  border-radius: 3px;
  transition: 0.2s linear;
  transition-delay: 0.2s;
  color: white;
  text-transform: uppercase;
  font-size: 8px;
  opacity: 0;
  visibility: hidden;
  font-weight: 100;
}
.fa-solid.fa-pen-to-square:hover {
  transform: scale(1.5);
}

.fa-solid.fa-pen-to-square:hover {
  fill: rgb(168, 7, 7);
}

.fa-solid.fa-pen-to-square:hover::after {
  visibility: visible;
  opacity: 1;
  top: -70%;
}
</style>
