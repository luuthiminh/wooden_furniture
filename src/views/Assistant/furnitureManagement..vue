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
    <button type="button" class="button float-right text-xs my-4">
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
        <div class="flex items-center text-lg font-medium">
          Add New Furniture
        </div>
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
              <label
                for="exampleInputEmail1"
                class="form-label font-medium mt-24"
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
    <div class="bg-white px-3 py-3 rounded-lg my-7">
      <table
        class="table table-hover border border-gray-900 text-center text-slate-600"
      >
        <thead>
          <tr class="text-sm text-center">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Collection ID</th>
            <th scope="col">Label ID</th>
            <th scope="col">Sold</th>
            <th scope="col">Appropriate Room</th>
            <th scope="col">Vote Star</th>
            <th scope="col">Avaliable</th>
            <th scope="col">Price</th>
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
            <td>{{ furniture.collectionId }}</td>
            <td>{{ furniture.label }}</td>
            <td>{{ furniture.sold }}</td>
            <td>{{ furniture.appropriateRoom }}</td>
            <td>{{ furniture.voteStar }}</td>
            <td>{{ furniture.available }}</td>
            <td>{{ furniture.price }}</td>
            <td>{{ furniture.image }}</td>
            <td class="flex gap-x-4">
              <i
                class="fa-solid fa-info px-1 py-1 cursor-pointer"
                data-toggle="modal"
                data-target="#exampleModalLong"
                @click.prevent="showModal(furniture)"
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
                @click.prevent="isEditModal = true"
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
                  <div class="py-1 px-4 text-sm">
                    <form @submit.prevent="">
                      <!-- <div class="grid grid-cols-2 gap-x-4"> -->
                      <div>
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
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
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
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
                    @click.prevent="saveChanges"
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
  </div>
  <!-- </div> -->
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
      isShowFurnitureSpecification: false,
      furnitures: [],
      isEditModal: false,
      furnitureModel: [],
      isAddFurniture: false,
    };
  },
  created() {
    this.getFurnitures();
  },
  methods: {
    async getFurnitures() {
      try {
        const response = await axios.get("/Assistant/shop-data/furniures");
        this.furnitures = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    closeModal() {
      this.isShowFurnitureSpecification = false;
      this.isEditModal = false;
      this.isAddFurniture = false;
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
</style>
