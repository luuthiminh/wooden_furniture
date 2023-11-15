<template>
  <div>
    <div class="nav pt-36 pb-3 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item">
            <router-link to="customerIndex">Home </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="#">All Product</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="#">Sofa</router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div
      class="grid grid-cols-5 gap-x-4 pt-3 mx-28 max-sm:block max-sm:mx-2 max-md:mx-4 max-md:grid-cols-6 max-md:gap-x-6"
    >
      <div class="col-span-1 max-md:col-span-2">
        <div class="nav_bar">
          <!-- <img class="pt-4" src="@/assets/images/advertisement/2.png" alt="" /> -->
          <div class="menu_category mb-1 rounded-md max-sm:hidden">
            <div class="header px-2 py-2 rounded-t-md">
              <h1 class="font-medium text-sm">ALL PRODUCT</h1>
            </div>
            <ul class="sort px-3 leading-9 text-xs">
              <li class="flex">
                <i class="bi bi-hourglass-top"></i>
                <router-link to="/customerIndex">
                  Latest Furniture
                </router-link>
              </li>
              <li class="flex">
                <i class="bi bi-hourglass-bottom"></i>
                <router-link to="/customerIndex"> Old Furniture </router-link>
              </li>
            </ul>
          </div>
          <br />
          <div
            class="menu_category rounded-md max-sm:hidden"
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
              <div>
                <h1 class="font-medium py-3 text-sm">Search by price</h1>
              </div>
              <ul class="text-xs">
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Price under $500
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Price under $1000
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Price under $1500
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Price under $2000
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Price under $2500
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Price over $2500
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="size px-3">
              <div>
                <h1 class="py-3 font-medium text-sm">Search by size</h1>
              </div>
              <div>
                <ul class="text-xs">
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        33 x 40cm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        33 x 40cm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        33 x 40cm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        33 x 40cm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        33 x 40cm
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        33 x 40cm
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul></ul>
              </div>
            </div>
            <div class="colors px-3 pt-2 pb-4">
              <div>
                <h1 class="py-2 font-medium text-sm">Search by color</h1>
              </div>
              <div>
                <ul class="flex gap-x-3">
                  <li>
                    <button
                      type="button"
                      class="btn btn-danger w-7 h-4"
                    ></button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="btn btn-warning w-7 h-4"
                    ></button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="btn btn-success w-7 h-4"
                    ></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="max-sm:hidden">
            <img class="pt-4" src="@/assets/images/tips/1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <all-furniture :furnitures="furnitures"></all-furniture>
        <div class="mt-5">
          <h1 class="font-medium text-center text-lg">BEST FURNITURE</h1>
          <hr class="w-1/12 mb-4" />
          <all-furniture :furnitures="furnitures"></all-furniture>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AllFurniture from "./AllFurniture.vue";
import axios from "axios";

export default {
  name: "FurnitureModal",
  components: {
    AllFurniture,
  },
  data() {
    return {
      furnitures: [],
    };
  },
  created() {
    this.getFurnitures();
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
</style>
