<template>
  <div class="all py-28 bg-neutral-50">
    <div class="grid grid-cols-4 mx-40">
      <div class="menu_about">
        <div class="col-span-1">
          <div class="border border-gray-600 leading-10 w-10/12 mb-4">
            <div class="menu text-center font-semibold text-stone-100">
              <span>MENU ABOUT</span>
            </div>
            <ul class="font-medium py-3 px-3">
              <li>
                <router-link to="/tips" class="font-medium text-base"
                  ><i class="fa-solid fa-seedling pr-3"></i> Tips</router-link
                >
              </li>
              <li>
                <router-link to="/news" class="font-medium text-base"
                  ><i class="fa-regular fa-newspaper pr-3"></i>
                  News</router-link
                >
              </li>
            </ul>
          </div>
          <div>
            <img class="w-10/12" src="@/assets/images/ad.png" alt="" />
          </div>
        </div>
      </div>
      <div class="some_post col-span-3 rounded-md px-6">
        <h1 class="font-semibold text-xl pb-3 text-slate-800">NEWS</h1>
        <div class="flex flex-cols-2 gap-x-8">
          <div class="bg-white px-2 py-2 shadow-md">
            <router-link to="/tips" class="font-medium text-sm">
              <img src="@/assets/images/news/4.png" alt="" />
            </router-link>
            <div
              class="bg-yellow-700 border-3 border-dashed border-slate-50 mx-5"
            >
              <h1 class="text-white py-1 text-center">
                3 favorite sofa models are being heavily discounted
              </h1>
            </div>
          </div>
          <div class="bg-white px-2 py-2 shadow-md mt-2">
            <img src="@/assets/images/news/5.png" alt="" />
            <div
              class="bg-yellow-700 border-3 border-dashed border-slate-50 mx-5 my-2"
            >
              <h1 class="text-white py-1 text-center">
                3 favorite sofa models are being heavily discounted
              </h1>
            </div>
          </div>
        </div>
        <div class="flex flex-cols-2 gap-x-8">
          <div class="bg-white px-2 py-2 shadow-md mt-2">
            <img src="@/assets/images/advertisement/1.png" alt="" />
            <div
              class="bg-yellow-700 border-3 border-dashed border-slate-50 mx-5 my-2"
            >
              <h1 class="text-white py-1 text-center">
                3 favorite sofa models are being heavily discounted
              </h1>
            </div>
          </div>
          <div class="bg-white px-2 py-2 shadow-md mt-2">
            <img src="@/assets/images/advertisement/3.png" alt="" />
            <div
              class="bg-yellow-700 border-3 border-dashed border-slate-50 mx-5 my-2"
            >
              <h1 class="text-white py-1 text-center">
                3 favorite sofa models are being heavily discounted
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu {
  border-bottom: 1px solid rgb(225, 219, 219);
  background-color: #997a64;
}
</style>
