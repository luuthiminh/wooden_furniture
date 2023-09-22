<template>
  <div class="px-40 py-28">
    <div class="grid grid-cols-4 gap-4">
      <div
        class="product"
        v-for="furniture in furnitureSearch"
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
              <div class="product_label bg-yellow-600">
                <span class="text-white">{{ furniture.label }}</span>
              </div>
            </div>
            <div class="pt-4 px-2">
              <div class="text-xs">
                <span class="text-gray-800 pr-2">{{ furniture.price }}</span>
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
                <span class="text-sm">Quantity: {{ furniture.sold }}</span>
              </div>
              <div class="button_buy py-3 px-2">
                <router-link to="/orderbill">
                  <button
                    class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                  >
                    Buy now
                  </button>
                </router-link>
              </div>
              <div class="flex flex-cols-2 gap-x-4 text-xs">
                <div><i class="fa-regular fa-heart"></i></div>
                <div @click.prevent="">
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "seachResult",
  props: {
    furnitureSearch: Array,
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
