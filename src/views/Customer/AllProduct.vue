<template>
  <div>
    <div class="nav pt-36 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item font-semibold text-yellow-950">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item active font-medium" aria-current="page">
            All Furniture
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
          <div class="menu_category mb-1 rounded-md max-sm:hidden">
            <div class="header px-2 py-2 rounded-t-md">
              <h1 class="font-medium text-sm">ALL FURNITURE</h1>
            </div>
            <ul class="sort leading-9 text-sm">
              <div v-if="filterRoom.length">
                <div v-for="ro in filterRoom" :key="ro" :value="ro" class="">
                  <div class="item_room">
                    <div class="px-3 flex gap-x-3">
                      <i class="bi bi-record-circle opacity-70"></i>
                      <li
                        class="font-medium px-2 cursor-pointer"
                        @click="handleFilterFurniture(ro)"
                      >
                        {{ ro }}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="room_loading">
                  <div class="loader">
                    <span class="l">L</span>
                    <span class="o">o</span>
                    <span class="a">a</span>
                    <span class="d">d</span>
                    <span class="i">i</span>
                    <span class="n">n</span>
                    <span class="g">g</span>
                    <span class="text-white"> .</span>
                    <span class="text-white"> .</span>
                    <span class="g">R</span>
                    <span class="g">o</span>
                    <span class="g">o</span>
                    <span class="g">m</span>
                    <span class="d1">.</span>
                    <span class="d2">.</span>
                    <span class="d3">.</span>
                  </div>
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
              <h1 class="font-medium">FILTER</h1>
            </div>
            <div class="price px-3">
              <div class="flex gap-x-4">
                <h1 class="font-medium py-3 text-sm">Search by price</h1>
                <div class="">
                  <button
                    @click.prevent="filterFurs"
                    class="px-2 py-1 w-10/12 font-medium hover:ring-offset-2 hover:ring-2 bg-gradient-to-r from-yellow-600 to-orange-600 ml-4 my-2 rounded-md text-white text-sm"
                  >
                    Filter
                  </button>
                </div>
              </div>
              <div class="">
                <label class="font-medium text-xs"
                  >Min Cost <b class="text-red-900">(VND)</b></label
                >
                <div>
                  <input
                    v-model="minCost"
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="cost"
                    aria-describedby="addon-wrapping"
                    :max="maxPrice"
                    :min="minPrice"
                    @change="ValidateCost"
                  />
                </div>
              </div>
              <div class="">
                <label class="font-medium text-xs"
                  >Max Cost <b class="text-red-900">(VND)</b></label
                >
                <div>
                  <input
                    v-model="maxCost"
                    :max="maxPrice"
                    :min="minPrice"
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="cost"
                    aria-describedby="addon-wrapping"
                    @change="ValidateCost"
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
                <option disable>Choose Category</option>
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
              <h1 class="py-3 font-medium text-sm">Vote</h1>
              <input
                type="range"
                class="form-range"
                :min="minStar"
                :max="maxStar"
                step="0.5"
                id="customRange3"
                v-model="selectedStar"
              />
              <p class="text-xs font-medium pb-2">
                {{ selectedStar
                }}<i class="text-yellow-500 fa-solid fa-star pl-1 text-xs"></i>
              </p>
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
            <!-- <img class="pt-4" src="@/assets/images/tips/1.png" alt="" /> -->
            <div
              id="carouselExampleCaptions"
              class="carousel slide pt-4"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="@/assets/images/category/living.png"
                    class="d-block w-100 rounded-md"
                    alt="livingroom"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="@/assets/images/category/alat.png"
                    class="d-block w-100 rounded-md"
                    alt="alat"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="@/assets/images/category/bedroom.png"
                    class="d-block w-100 rounded-md"
                    alt="bedroom"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="@/assets/images/category/kitchen.png"
                    class="d-block w-100"
                    alt="kitchen"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4 mb-5">
        <div v-if="selectedFurPrice.length || filteredFurnitures.length">
          <all-furniture
            v-if="selectedFurPrice?.length"
            :furnitures="filterFurnitures"
          ></all-furniture>

          <all-furniture
            v-else-if="filteredFurnitures.length > 0"
            :furnitures="filteredFurnitures"
          >
          </all-furniture>
        </div>
        <div v-else>
          <all-furniture :furnitures="furnitures"></all-furniture>
        </div>
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
      urlFurniture: {},
      categories: [],
      selectedStar: 0,
      filterFurnitures: [],
      collections: [],
      filteredFurnitures: [],
      selectedFurPrice: 0,
      messageWanning: "",
      maxPrice: 0,
      minPrice: 0,
    };
  },
  created() {
    this.getAllCategories();
    this.getAllCollections();
    this.getAllFurniture();
  },
  methods: {
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
    async filterFurs() {
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
          if (response.data && response.data.length > 0) {
            this.filteredFurnitures = response.data;
          } else {
            this.modalType = null;
            this.isAlertWanning = true;
            this.messageWanning = "Furniture not found";
            setTimeout(() => {
              this.isAlertWanning = false;
            }, 5000);
            this.getFurnitures();
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    getAllFurniture() {
      this.$store.dispatch("getFurnitures");
    },
    handleFilterFurniture(ro) {
      this.filteredFurnitures = this.furnitures.filter(
        (furniture) => furniture.appropriateRoom === ro
      );
      console.log(this.filteredFurnitures);
    },
  },
  computed: {
    furnitures() {
      return this.$store.state.furnitures;
    },
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
  font-size: 14px;
}
.room_loading .card-3 {
  height: 0.75rem;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--gray);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) alternate-reverse infinite;
}
@keyframes pulse {
  to {
    opacity: 0.2;
  }
}
/* Loading */
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
.l {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 0.2s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}

.o {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 0.4s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}

.a {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 0.6s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}

.d {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 0.8s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}

.i {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 1s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}

.n {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 1.2s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}

.g {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 1.4s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}

.d1 {
  color: #8c5a16;
  opacity: 0;
  animation: pass1 2s ease-in-out infinite;
  animation-delay: 1.6s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}

.d2 {
  color: #8c5a16;
  opacity: 0;
  animation: pass1 2s ease-in-out infinite;
  animation-delay: 2s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}
.d3 {
  color: #8c5a16;
  opacity: 0;
  animation: pass1 2s ease-in-out infinite;
  animation-delay: 2s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
  font-size: 10px;
}
@keyframes pass {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes pass1 {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
