<template>
  <all-furniture :furnitures="furnitures"></all-furniture>
</template>
<script>
import AllFurniture from "./AllFurniture.vue";
import axios from "axios";
export default {
  name: "seachResult",
  components: {
    AllFurniture,
  },
  // props: {
  //   furnitureSearch: Array,
  // },
  data() {
    return {
      furnitures: [],
    };
  },
  // computed: {
  //   searchResults() {
  //     return this.$store.state.searchResults;
  //   },
  // },
  methods: {
    async getFurnitures() {
      try {
        const response = await axios.get("customer/furnitures");
        this.furnitures = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    // Gọi action để tìm kiếm nội thất khi component được tạo
    this.$store
      .dispatch("searchFurnitures", this.$route.query.keyword)
      .then(() => {
        // Sau khi action hoàn tất, lấy dữ liệu từ state và gán vào biến furnitures
        this.furnitures = this.$store.state.furnitures;
      });
  },
};
</script>
<style scoped>
.product {
  position: relative;
}
.product_label {
  position: absolute;
  width: 25%;
  border-radius: 1rem;
  text-align: center;
  font-size: 13px;
  top: 4%;
  left: 70%;
}
</style>
