<template>
  <header-admin :title="title" />

  <div class="bg-white px-6 py-6 rounded-lg mb-5 mb-xl-10">
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
import HeaderAdmin from "@/components/headerAdmin.vue";
export default {
  components: {
    HeaderAdmin,
  },
  data() {
    return {
      isShowFurnitureSpecification: false,
      furnitures: [],
      isEditModal: false,
      furnitureModel: [],
      isAddFurniture: false,
      title: "All Furniture",
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
