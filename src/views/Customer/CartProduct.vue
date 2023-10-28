<template>
  <div class="bg-neutral-50">
    <div class="mx-32 pt-36 max-sm:pt-24">
      <div class="nav">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-neutral-50">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">All Product</a></li>
            <li class="breadcrumb-item active" aria-current="page">Sofa</li>
          </ol>
        </nav>
      </div>
      <div class="grid grid-cols-5 gap-x-4">
        <div
          class="menu_order mb-1 bg-white border-solid border-1 border-slate-300"
        >
          <div class="header px-3 py-3 bg-stone-500">
            <h1 class="font-semibold text-white">Menu Order</h1>
          </div>
          <ul class="px-3 leading-9 text-base">
            <li>All</li>
            <li>Delivery</li>
            <li>Complete</li>
            <li>Cancel</li>
          </ul>
        </div>
        <div class="col-span-4 bg-white">
          <div class="temporary_cart">
            <div class="grid grid-cols-7 px-1 py-1">
              <div class="col-span-2">
                <img
                  src="@/assets/images/category/sofa/sofa_1.png"
                  alt=""
                  class="px-1 py-1"
                />
              </div>
              <div class="col-span-5 infor_furniture pl-3">
                <div>
                  <h1 class="font-semibold">Name Product</h1>
                  <span>Color: gray</span>
                  <br />
                  <span>Quantity: 2</span>
                </div>
              </div>
            </div>
            <div class="mt-4 w-full h-px bg-slate-200"></div>
            <div class="float-right pr-4">
              <span class="float-right text-lg py-3">Total: $1000</span>
              <br />
              <button
                class="bg-yellow-700 text-white py-2 px-3 mr-1 rounded-md"
              >
                BUY
              </button>
              <button class="bg-red-700 text-white py-2 px-3 rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.menu_order {
  height: 60%;
  font-weight: 500;
}
/* .menu_order li {
  border-bottom: 1px solid rgb(217, 213, 213);
} */
</style>
