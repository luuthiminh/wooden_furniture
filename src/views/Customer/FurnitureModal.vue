<template>
  <div>
    <div>
      <div v-if="furnitures.length">
        <div class="grid grid-cols-4 gap-4">
          <div
            class="product"
            v-for="furniture in furnitures"
            :key="furniture.furnitureId"
          >
            <div>
              <div
                class="product_bed px-2 py-2 border border-indigo-100 rounded-md"
              >
                <div class="image_product">
                  <router-link
                    :to="{
                      name: 'FurnitureDetail',
                      params: { id: furniture.furnitureId },
                    }"
                  >
                    <img
                      src="@/assets/images/category/shelves_tv/shelves_11.png"
                      alt=""
                    />
                  </router-link>
                  <div class="furniture_label">
                    <div v-if="furniture.label === 'New'">
                      <div
                        class="product_label bg-yellow-600 px-1 py-1 rounded-md"
                      >
                        <span class="text-white">{{ furniture.label }}</span>
                      </div>
                    </div>
                    <div v-if="furniture.label === 'Hot Sale'">
                      <div
                        class="product_label bg-red-700 px-1 py-1 rounded-md"
                      >
                        <span class="text-white">{{ furniture.label }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-4 px-2">
                  <div class="text-xs">
                    <span class="text-gray-800 pr-2">{{
                      furniture.price
                    }}</span>
                    <del class="text-gray-500">$2000</del>
                  </div>
                  <div class="pt-2 text-base font-semibold">
                    <span>{{ furniture.furnitureName }}</span>
                  </div>
                  <div>
                    <span class="text-sm"
                      >Star: {{ furniture.voteStar
                      }}<i class="fa-solid fa-star pl-1 text-xs"></i
                    ></span>
                  </div>
                  <div>
                    <span class="text-sm">Sold: {{ furniture.sold }}</span>
                  </div>
                  <div class="button_buy py-3 px-2">
                    <router-link
                      :to="{
                        name: 'OrderBill',
                        params: { id: furniture.furnitureId },
                      }"
                    >
                      <button
                        class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                      >
                        Buy now
                      </button>
                    </router-link>
                  </div>
                  <div class="grid grid-cols-2 gap-x-4 text-xs">
                    <div>
                      <i class="fa-regular fa-heart cursor-pointer"></i>
                      Add wish list
                    </div>
                    <div>
                      <button @click="showModal(furniture)" class="">
                        <i class="fa-solid fa-square-plus cursor-pointer"></i>
                        More
                      </button>
                      <Modal
                        :size="size"
                        v-if="isShowModal"
                        @close="closeModal"
                      >
                        <template #header>
                          <div class="flex items-center text-lg font-medium">
                            ALL Furniture
                          </div>
                        </template>
                        <template #body>
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
                                <div
                                  class="name furniture font-semibold pb-3 text-sm"
                                >
                                  {{ fur.furnitureName }}
                                </div>
                                <div class="grid grid-cols-2 gap-x-1 text-sm">
                                  <span>Height</span>
                                  <span>{{ fur.height }}</span>
                                </div>
                                <div class="grid grid-cols-2 gap-x-1 text-sm">
                                  <span>Width:</span>
                                  <span>{{ fur.width }}</span>
                                </div>
                                <div class="grid grid-cols-2 gap-x-1 text-sm">
                                  <span>Lenght:</span>
                                  <span>{{ fur.length }}</span>
                                </div>
                                <div class="text-sm">
                                  <div class="grid grid-cols-2 gap-x-1 text-sm">
                                    <span>Price:</span>
                                    <!-- <span>{{ fur.price }}</span> -->
                                    <!-- <span>$1000</span> -->
                                    <span class="text-red-500">$2000</span>
                                  </div>
                                </div>
                                <div class="grid grid-cols-2 gap-x-1 text-sm">
                                  <span>Color:</span>
                                  <span>{{ fur.color }}</span>
                                </div>
                                <div class="grid grid-cols-2 gap-x-1 text-sm">
                                  <span>Wood:</span>
                                  <span>{{ fur.wood }}</span>
                                </div>
                                <br />
                              </div>
                            </div>
                          </div>
                        </template>
                        <template #footer>
                          <div class="flex justify-between">
                            <button
                              @click="closeModal"
                              type="button"
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                              Close
                            </button>
                          </div>
                        </template>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
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
    </div>
  </div>
</template>
<script setup>
import { Modal } from "flowbite-vue";
import { ref } from "vue";

const isShowModal = ref(false);
const furnitureModel = ref([]);
function closeModal() {
  isShowModal.value = false;
}
async function showModal(furniture) {
  this.isShowModal = true;
  try {
    const response = await axios.get(
      "customer/furnitures/" + furniture.furnitureId
    );
    this.furnitureModel = response.data;
    console.log(furniture);
  } catch (error) {
    console.error(error);
  }
}
</script>
<script>
import axios from "axios";

export default {
  name: "FurnitureModal",
  data() {
    return {
      furnitures: [],
    };
  },

  async created() {
    try {
      const response = await axios.get("/customer/furnitures");
      this.furnitures = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
