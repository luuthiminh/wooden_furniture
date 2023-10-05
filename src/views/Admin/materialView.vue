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
          <th scope="col">Price</th>
          <th scope="col">Description</th>
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
          <td>{{ furniture.price }}</td>
          <td>{{ furniture.description }}</td>
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
      title: "All Material",
    };
  },
  created() {
    this.getFurnitures();
  },
  methods: {
    async getFurnitures() {
      try {
        const response = await axios.get("/Assistant/shop-data/categories");
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
