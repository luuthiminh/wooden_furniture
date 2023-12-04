<template>
  <div>
    <div class="nav pt-36 pb-3 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item font-semibold text-yellow-950">
            <router-link to="customerIndex">Home</router-link>
          </li>

          <li class="breadcrumb-item active font-medium" aria-current="page">
            All Product
          </li>
        </ol>
      </nav>
    </div>
    <div class="absolute right-0">
      <alert-Error v-if="isAlertError">
        <template v-slot:message>{{ messageError }}</template></alert-Error
      >
      <alert-success v-if="isAlertSuccess">
        <template v-slot:message>{{ messageSuccess }}</template>
      </alert-success>
      <alert-wanning v-if="isAlertWanning">
        <template v-slot:message>{{ messageWanning }}</template>
      </alert-wanning>
    </div>

    <div
      class="grid grid-cols-5 gap-x-4 pt-3 mx-28 max-sm:block max-sm:mx-2 max-md:mx-4 max-md:grid-cols-6 max-md:gap-x-6"
    >
      <div class="col-span-1 max-md:col-span-2">
        <div class="nav_bar">
          <!-- <img class="pt-4" src="@/assets/images/advertisement/2.png" alt="" /> -->
          <div class="menu_category mb-1 rounded-md max-sm:hidden pb-4">
            <div class="header px-2 py-2 rounded-t-md">
              <h1 class="font-medium text-sm">ALL Furniture</h1>
            </div>
            <ul class="sort px-3 leading-9 text-sm">
              <div v-if="filterRoom.length">
                <div
                  v-for="ro in filterRoom"
                  :key="ro"
                  :value="ro"
                  class="flex gap-x-3"
                >
                  <i class="bi bi-check-square-fill opacity-60"></i>
                  <li
                    class="font-medium px-2 cursor-pointer"
                    @click="handleFilterFurniture(ro)"
                  >
                    {{ ro }}
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <br />
          <div
            class="menu_category rounded-md max-sm:hidden pb-4"
            :style="{
              border: isDark
                ? '1px solid rgb(166 163 160)'
                : '1px solid #cbd5e1',
            }"
          >
            <div class="header px-2 py-2 rounded-t-md">
              <h1 class="font-medium text-sm">FILTER</h1>
            </div>
            <div class="price px-3">
              <div class="flex gap-x-4">
                <h1 class="font-medium py-3 text-sm">Search by price</h1>
                <div class="">
                  <button
                    @click.prevent="filterFurs"
                    class="px-2 py-1 w-10/12 font-medium hover:ring-offset-2 hover:ring-2 bg-orange-200 ml-3 my-2 rounded-md text-yellow-800"
                  >
                    Filter
                  </button>
                </div>
              </div>
              <div class="">
                <label class="font-medium text-xs">Min Cost</label>
                <div>
                  <input
                    v-model="minCost"
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="cost"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div class="">
                <label class="font-medium text-xs">Max Cost</label>
                <div>
                  <input
                    v-model="maxCost"
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="cost"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
            <div class="size px-3">
              <div>
                <h1 class="pt-3 font-medium text-sm">Choose Category</h1>
              </div>
              <label class="font-meidum text-xs"></label>
              <select
                v-if="categories.length"
                v-model="category"
                class="form-select"
              >
                <option checked>Choose Category</option>
                <option
                  v-for="ca in categories"
                  :key="ca.categoryId"
                  :value="ca.category"
                >
                  {{ ca.categoryName }}
                </option>
              </select>
              <div>
                <ul></ul>
              </div>
            </div>
            <div class="px-3">
              <h1 class="py-3 font-medium text-sm">Star</h1>
              <input
                type="range"
                class="form-range"
                :min="minStar"
                :max="maxStar"
                step="0.5"
                id="customRange3"
                v-model="selectedStar"
              />
              <p class="text-xs font-medium pb-2">Price: ${{ selectedStar }}</p>
            </div>
            <div class="size px-3">
              <div>
                <h1 class="pt-3 font-medium text-sm">Choose Room</h1>
              </div>
              <label class="font-meidum text-xs"></label>
              <select
                v-if="filterRoom.length"
                v-model="appRoom"
                class="form-select"
              >
                <option v-for="room in filterRoom" :key="room" :value="room">
                  {{ room }}
                </option>
              </select>
              <div>
                <ul></ul>
              </div>
            </div>
            <div class="size px-3">
              <div>
                <h1 class="pt-3 font-medium text-sm">Choose Collection</h1>
              </div>
              <label class="font-meidum text-xs"></label>
              <select
                v-if="collections.length"
                v-model="col"
                class="form-select"
              >
                <option
                  v-for="co in collections"
                  :key="co.collectionId"
                  :value="co.collection"
                >
                  {{ co.collectionName }}
                </option>
              </select>
            </div>
          </div>
          <div class="mb-10 max-sm:hidden">
            <img class="pt-4" src="@/assets/images/tips/1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-span-4 mb-5">
        <!-- <all-furniture :furnitures="furnitures"></all-furniture> -->
        <!-- <div v-if="selectedFurPrice"> -->
        <all-furniture
          v-if="selectedFurPrice"
          :furnitures="filterFurnitures"
        ></all-furniture>
        <!-- <div v-else>
            <div class="hourglassBackground">
              <div class="hourglassContainer">
                <div class="hourglassCurves"></div>
                <div class="hourglassCapTop"></div>
                <div class="hourglassGlassTop"></div>
                <div class="hourglassSand"></div>
                <div class="hourglassSandStream"></div>
                <div class="hourglassCapBottom"></div>
                <div class="hourglassGlass"></div>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div v-else-if="filteredFurnitures.length"> -->
        <all-furniture
          v-if="selectedFurPrice"
          :furnitures="filteredFurnitures"
        ></all-furniture>
        <!-- <div v-else>
            <div class="hourglassBackground">
              <div class="hourglassContainer">
                <div class="hourglassCurves"></div>
                <div class="hourglassCapTop"></div>
                <div class="hourglassGlassTop"></div>
                <div class="hourglassSand"></div>
                <div class="hourglassSandStream"></div>
                <div class="hourglassCapBottom"></div>
                <div class="hourglassGlass"></div>
              </div>
            </div>
          </div> -->
        <!-- </div> -->

        <all-furniture v-else :furnitures="furnitures"></all-furniture>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import AllFurniture from "./AllFurniture.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import alertWanning from "@/components/AlertWanning.vue";

export default {
  name: "FurnitureModal",
  components: {
    AllFurniture,
    alertError,
    alertSuccess,
    alertWanning,
  },
  data() {
    return {
      furnitures: [],
      categories: [],
      selectedStar: 0,
      filterFurnitures: [],
      collections: [],
      filteredFurnitures: [],
      selectedFurPrice: 0,
    };
  },
  created() {
    this.getFurnitures();
    this.getAllCategories();
    this.getAllCollections();
  },
  methods: {
    async getFurnitures() {
      try {
        const response = await axios.get("customer/furnitures");
        this.furnitures = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getAllCategories() {
      try {
        const response = await axios.get("shopOwner/shop-data/categories");
        this.categories = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllCollections() {
      try {
        const response = await axios.get("shopOwner/shop-data/collections");
        this.collections = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async toggleWishlist(furniture) {
      try {
        const response = await axios.put("customer/wishlist/toggle", {
          params: { furnitureId: furniture.furnitureId },
        });

        console.log(response.data);
      } catch (error) {
        console.error("Error toggling wishlist:", error);
      }
    },
    async filterFurs() {
      console.log("Hi");
      try {
        const response = await axios.get("customer/furnitures/filter", {
          params: {
            minCost: this.minCost,
            maxCost: this.maxCost,
            category: this.category,
            collection: this.col,
            appropriateRoom: this.appRoom,
            star: this.selectedStar,
          },
        });
        if (response.status === 200) {
          if (response.data !== "") {
            this.modalType = null;
            this.isAlertWanning = true;
            this.messageWanning = "Furniture not found";
            setTimeout(() => {
              this.isAlertWanning = false;
            }, 5000);
            this.getFurnitures();
          }
          this.filteredFurnitures = response.data;
          console.log(this.filteredFurnitures);
        }
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    handleFilterFurniture(ro) {
      console.log("Xin chao");
      this.filteredFurnitures = this.furnitures.filter(
        (furniture) => furniture.appropriateRoom === ro
      );
      console.log(this.filteredFurnitures);
    },
  },
  computed: {
    maxStar() {
      return this.furnitures.reduce(
        (max, fur) => (fur.voteStar > max ? fur.voteStar : max),
        0
      );
    },
    minStar() {
      return this.furnitures.reduce(
        (min, fur) => (fur.voteStar < min ? fur.voteStar : min),
        Infinity
      );
    },
    filterStar() {
      return this.furnitures.filter((fur) => fur.voteStar == this.selectedStar);
    },
    filterRoom() {
      return this.furnitures
        .map((furniture) => furniture.appropriateRoom)
        .filter((value, index, furs) => furs.indexOf(value) === index);
    },
    // filterCollection() {
    //   return this.furnitures
    //     .map((furniture) => furniture.collection)
    //     .filter((value, index, furs) => furs.indexOf(value) === index);
    // },
    // filteredFurs() {
    //   return this.furnitures.filter(
    //     (fur) => fur.price >= this.minPrice && fur.price <= this.maxPrice
    //   );
    // },
  },
};
</script>

<style scoped>
.nav {
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  color: #000000;
}
.menu_category .header {
  background-color: #302924;
}
.menu_category .header h1 {
  color: wheat;
}
.menu_category {
  background: white;
  /* border: "1px solid #cbd5e1"; */
  border: 1px solid rgb(195 195 195);
}
.price li,
.size li {
  padding-bottom: 13px;
}
.sort i {
  padding-right: 10px;
  color: #50443c;
}
hr {
  margin-left: 46%;
}
.moon .nav {
  border-bottom: 1px solid rgba(241, 235, 228, 0.1);
  color: #ffffff;
}
.moon .menu_category {
  border: 1px solid #f4f1f1;
  /* background-color: #efede9; */
  background-color: transparent;
}
.moon .menu_category .header {
  background-color: #3e3d3d;
}
.moon .col-span-4 h1 {
  color: rgb(229 227 224);
}
.moon hr,
.moon .bi.bi-hourglass-top,
.moon .bi-hourglass-bottom {
  color: #ffffff;
}
.form-select {
  font-size: 14px;
}
.form-control,
.form-select {
  border: none;
  background-color: rgb(242, 246, 249);
}
.sort li {
  text-transform: uppercase;
}
</style>
