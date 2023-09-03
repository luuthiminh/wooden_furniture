<template>
  <div class="bg-neutral-50">
    <div class="nav pt-28 pl-32 pb-3 mb-2">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-neutral-50 text-xs">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">All Product</a></li>
          <li class="breadcrumb-item active" aria-current="page">Sofa</li>
        </ol>
      </nav>
    </div>
    <div class="grid grid-cols-5 gap-x-4 mx-32">
      <div class="col-span-1">
        <div class="nav_bar">
          <!-- <img class="pt-4" src="@/assets/images/advertisement/2.png" alt="" /> -->
          <div
            class="menu_category mb-1 bg-white border-solid border-1 border-slate-300"
          >
            <div class="header px-2 py-2">
              <h1 class="font-medium text-sm">ALL PRODUCT</h1>
            </div>
            <ul class="sort px-3 leading-9 text-xs">
              <li>
                <!-- <i class="fa-solid fa-hourglass-start"></i> -->
                <router-link to="/customerIndex">
                  Latest Furniture
                </router-link>
              </li>
              <li>
                <!-- <i class="fa-solid fa-hourglass-end"></i> -->
                <router-link to="/customerIndex"> Old Furniture </router-link>
              </li>
            </ul>
          </div>
          <br />
          <div
            class="menu_category bg-white border-solid border-1 border-slate-300"
          >
            <div class="header px-2 py-2">
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
          <div>
            <img class="pt-4" src="@/assets/images/tips/1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <!-- <div>
          <ul clsss="grid grid-cols-6 gap-x-2">
            <li>
              <router-link to=""><i class="fa-solid fa-couch"></i></router-link>
            </li>
            <li>
              <router-link to=""
                ><i class="fa-regular fa-clock"></i
              ></router-link>
            </li>
            <li>
              <router-link to=""><i class="fa-solid fa-chair"></i></router-link>
            </li>
            <li><router-link to=""></router-link></li>
            <li><router-link to=""></router-link></li>
            <li><router-link to=""></router-link></li>
          </ul>
        </div> -->
        <div class="grid grid-cols-4 gap-x-4">
          <div class="product px-2 py-2 border border-indigo-100 rounded-md">
            <div class="image_product">
              <router-link to="/detailfurniture">
                <img
                  src="@/assets/images/category/shelves_tv/shelves_11.png"
                  alt=""
                />
              </router-link>
              <div class="product_label bg-yellow-600">
                <span class="text-white">New</span>
              </div>
            </div>
            <div class="pt-4">
              <div class="text-xs">
                <span class="text-gray-800 pr-2">$1500</span>
                <del class="text-gray-500">$2000</del>
              </div>
              <div class="pt-2 text-base font-semibold">
                <span>Name Product</span>
              </div>
              <div>
                <span class="text-gray-600 text-xs">Description</span>
              </div>
              <div>
                <span class="text-sm"
                  >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                ></span>
              </div>
              <div>
                <span class="text-sm">Quantity: 3</span>
              </div>
              <div class="button_buy py-3 px-2">
                <button
                  class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div class="product px-2 py-2 border border-indigo-100 rounded-md">
            <div class="image_product">
              <router-link to="/detailfurniture">
                <img
                  src="@/assets/images/category/shelves_tv/shelves_11.png"
                  alt=""
                />
              </router-link>
              <div class="product_label bg-yellow-600">
                <span class="text-white">New</span>
              </div>
            </div>
            <div class="pt-4">
              <div class="text-xs">
                <span class="text-gray-800 pr-2">$1500</span>
                <del class="text-gray-500">$2000</del>
              </div>
              <div class="pt-2 text-base font-semibold">
                <span>Name Product</span>
              </div>
              <div>
                <span class="text-gray-600 text-xs">Description</span>
              </div>
              <div>
                <span class="text-sm"
                  >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                ></span>
              </div>
              <div>
                <span class="text-sm">Quantity: 3</span>
              </div>
              <div class="button_buy py-3 px-2">
                <button
                  class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div class="product px-2 py-2 border border-indigo-100 rounded-md">
            <div class="image_product">
              <router-link to="/detailfurniture">
                <img
                  src="@/assets/images/category/shelves_tv/shelves_11.png"
                  alt=""
                />
              </router-link>
              <div class="product_label bg-yellow-600">
                <span class="text-white">New</span>
              </div>
            </div>
            <div class="pt-4">
              <div class="text-xs">
                <span class="text-gray-800 pr-2">$1500</span>
                <del class="text-gray-500">$2000</del>
              </div>
              <div class="pt-2 text-base font-semibold">
                <span>Name Product</span>
              </div>
              <div>
                <span class="text-gray-600 text-xs">Description</span>
              </div>
              <div>
                <span class="text-sm"
                  >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                ></span>
              </div>
              <div>
                <span class="text-sm">Quantity: 3</span>
              </div>
              <div class="button_buy py-3 px-2">
                <button
                  class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div class="product px-2 py-2 border border-indigo-100 rounded-md">
            <div class="image_product">
              <router-link to="/detailfurniture">
                <img
                  src="@/assets/images/category/shelves_tv/shelves_11.png"
                  alt=""
                />
              </router-link>
              <div class="product_label bg-yellow-600">
                <span class="text-white">New</span>
              </div>
            </div>
            <div class="pt-4">
              <div class="text-xs">
                <span class="text-gray-800 pr-2">$1500</span>
                <del class="text-gray-500">$2000</del>
              </div>
              <div class="pt-2 text-base font-semibold">
                <span>Name Product</span>
              </div>
              <div>
                <span class="text-gray-600 text-xs">Description</span>
              </div>
              <div>
                <span class="text-sm"
                  >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                ></span>
              </div>
              <div>
                <span class="text-sm">Quantity: 3</span>
              </div>
              <div class="button_buy py-3 px-2">
                <button
                  class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="col-span-4">
          <div class="grid grid-cols-4 gap-x-4">
            <div class="product px-2 py-2 border border-indigo-100 rounded-md">
              <div class="image_product">
                <router-link to="/detailfurniture">
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt=""
                  />
                </router-link>
                <div class="product_label bg-yellow-600">
                  <span class="text-white">New</span>
                </div>
              </div>
              <div class="pt-4">
                <div class="text-xs">
                  <span class="text-gray-800 pr-2">$1500</span>
                  <del class="text-gray-500">$2000</del>
                </div>
                <div class="pt-2 text-base font-semibold">
                  <span>Name Product</span>
                </div>
                <div>
                  <span class="text-gray-600 text-xs">Description</span>
                </div>
                <div>
                  <span class="text-sm"
                    >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                  ></span>
                </div>
                <div>
                  <span class="text-sm">Quantity: 3</span>
                </div>
                <div class="button_buy py-3 px-2">
                  <button
                    class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
            <div class="product px-2 py-2 border border-indigo-100 rounded-md">
              <div class="image_product">
                <router-link to="/detailfurniture">
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt=""
                  />
                </router-link>
                <div class="product_label bg-yellow-600">
                  <span class="text-white">New</span>
                </div>
              </div>
              <div class="pt-4">
                <div class="text-xs">
                  <span class="text-gray-800 pr-2">$1500</span>
                  <del class="text-gray-500">$2000</del>
                </div>
                <div class="pt-2 text-base font-semibold">
                  <span>Name Product</span>
                </div>
                <div>
                  <span class="text-gray-600 text-xs">Description</span>
                </div>
                <div>
                  <span class="text-sm"
                    >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                  ></span>
                </div>
                <div>
                  <span class="text-sm">Quantity: 3</span>
                </div>
                <div class="button_buy py-3 px-2">
                  <button
                    class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
            <div class="product px-2 py-2 border border-indigo-100 rounded-md">
              <div class="image_product">
                <router-link to="/detailfurniture">
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt=""
                  />
                </router-link>
                <div class="product_label bg-yellow-600">
                  <span class="text-white">New</span>
                </div>
              </div>
              <div class="pt-4">
                <div class="text-xs">
                  <span class="text-gray-800 pr-2">$1500</span>
                  <del class="text-gray-500">$2000</del>
                </div>
                <div class="pt-2 text-base font-semibold">
                  <span>Name Product</span>
                </div>
                <div>
                  <span class="text-gray-600 text-xs">Description</span>
                </div>
                <div>
                  <span class="text-sm"
                    >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                  ></span>
                </div>
                <div>
                  <span class="text-sm">Quantity: 3</span>
                </div>
                <div class="button_buy py-3 px-2">
                  <button
                    class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
            <div class="product px-2 py-2 border border-indigo-100 rounded-md">
              <div class="image_product">
                <router-link to="/detailfurniture">
                  <img
                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                    alt=""
                  />
                </router-link>
                <div class="product_label bg-yellow-600">
                  <span class="text-white">New</span>
                </div>
              </div>
              <div class="pt-4">
                <div class="text-xs">
                  <span class="text-gray-800 pr-2">$1500</span>
                  <del class="text-gray-500">$2000</del>
                </div>
                <div class="pt-2 text-base font-semibold">
                  <span>Name Product</span>
                </div>
                <div>
                  <span class="text-gray-600 text-xs">Description</span>
                </div>
                <div>
                  <span class="text-sm"
                    >Star: 5<i class="fa-solid fa-star pl-1 text-xs"></i
                  ></span>
                </div>
                <div>
                  <span class="text-sm">Quantity: 3</span>
                </div>
                <div class="button_buy py-3 px-2">
                  <button
                    class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav {
  border-bottom: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
}
.menu_category .header {
  background-color: #302924;
  color: wheat;
}
.price li,
.size li {
  padding-bottom: 13px;
}
.sort i {
  padding-right: 10px;
  color: #50443c;
}
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
