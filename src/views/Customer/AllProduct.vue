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
                      <div class="product_label bg-yellow-600">
                        <span class="text-white">{{ furniture.label }}</span>
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
                      <!-- <div>
                        <span class="text-gray-600 text-xs">Description</span>
                      </div> -->
                      <div>
                        <span class="text-sm"
                          >Star: {{ furniture.voteStar
                          }}<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm"
                          >Quantity: {{ furniture.sold }}</span
                        >
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
                        <div @click.prevent="addToCart">
                          <i class="fa-solid fa-cart-shopping"></i>
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
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      furnitures: [],
    };
  },

  async created() {
    try {
      const response = await axios.get(
        "https://landlstore.azurewebsites.net/api/customer/furnitures",
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      this.furnitures = response.data;
      console.log(response);
      console.log(this.furnitures);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async addToCart() {
      try {
        const response = await axios.post(
          "https://landlstore.azurewebsites.net/api/customer/add-to-cart",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            // this.furnitures,
          }
        );
        this.response = response.data;
        if (response.status === 200) {
          alert("Add the furniture to cart suuccessfully");
          console.log(response);
          console.log(this.response);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
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
/* Loadding */
.hourglassBackground {
  position: relative;
  background-color: rgb(71, 60, 60);
  height: 130px;
  width: 130px;
  border-radius: 50%;
  margin: 30px auto;
}

.hourglassContainer {
  position: absolute;
  top: 30px;
  left: 40px;
  width: 50px;
  height: 70px;
  -webkit-animation: hourglassRotate 2s ease-in 0s infinite;
  animation: hourglassRotate 2s ease-in 0s infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.hourglassContainer div,
.hourglassContainer div:before,
.hourglassContainer div:after {
  transform-style: preserve-3d;
}

@-webkit-keyframes hourglassRotate {
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(180deg);
  }
}

@keyframes hourglassRotate {
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(180deg);
  }
}

.hourglassCapTop {
  top: 0;
}

.hourglassCapTop:before {
  top: -25px;
}

.hourglassCapTop:after {
  top: -20px;
}

.hourglassCapBottom {
  bottom: 0;
}

.hourglassCapBottom:before {
  bottom: -25px;
}

.hourglassCapBottom:after {
  bottom: -20px;
}

.hourglassGlassTop {
  transform: rotateX(90deg);
  position: absolute;
  top: -16px;
  left: 3px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #999999;
}

.hourglassGlass {
  perspective: 100px;
  position: absolute;
  top: 32px;
  left: 20px;
  width: 10px;
  height: 6px;
  background-color: #999999;
  opacity: 0.5;
}

.hourglassGlass:before,
.hourglassGlass:after {
  content: "";
  display: block;
  position: absolute;
  background-color: #999999;
  left: -17px;
  width: 44px;
  height: 28px;
}

.hourglassGlass:before {
  top: -27px;
  border-radius: 0 0 25px 25px;
}

.hourglassGlass:after {
  bottom: -27px;
  border-radius: 25px 25px 0 0;
}

.hourglassCurves:before,
.hourglassCurves:after {
  content: "";
  display: block;
  position: absolute;
  top: 32px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #333;
  animation: hideCurves 2s ease-in 0s infinite;
}

.hourglassCurves:before {
  left: 15px;
}

.hourglassCurves:after {
  left: 29px;
}

@-webkit-keyframes hideCurves {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hideCurves {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.hourglassSandStream:before {
  content: "";
  display: block;
  position: absolute;
  left: 24px;
  width: 3px;
  background-color: white;
  -webkit-animation: sandStream1 2s ease-in 0s infinite;
  animation: sandStream1 2s ease-in 0s infinite;
}

.hourglassSandStream:after {
  content: "";
  display: block;
  position: absolute;
  top: 36px;
  left: 19px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #fff;
  animation: sandStream2 2s ease-in 0s infinite;
}

@-webkit-keyframes sandStream1 {
  0% {
    height: 0;
    top: 35px;
  }

  50% {
    height: 0;
    top: 45px;
  }

  60% {
    height: 35px;
    top: 8px;
  }

  85% {
    height: 35px;
    top: 8px;
  }

  100% {
    height: 0;
    top: 8px;
  }
}

@keyframes sandStream1 {
  0% {
    height: 0;
    top: 35px;
  }

  50% {
    height: 0;
    top: 45px;
  }

  60% {
    height: 35px;
    top: 8px;
  }

  85% {
    height: 35px;
    top: 8px;
  }

  100% {
    height: 0;
    top: 8px;
  }
}

@-webkit-keyframes sandStream2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  91% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes sandStream2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  91% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

.hourglassSand:before,
.hourglassSand:after {
  content: "";
  display: block;
  position: absolute;
  left: 6px;
  background-color: white;
  perspective: 500px;
}

.hourglassSand:before {
  top: 8px;
  width: 39px;
  border-radius: 3px 3px 30px 30px;
  animation: sandFillup 2s ease-in 0s infinite;
}

.hourglassSand:after {
  border-radius: 30px 30px 3px 3px;
  animation: sandDeplete 2s ease-in 0s infinite;
}

@-webkit-keyframes sandFillup {
  0% {
    opacity: 0;
    height: 0;
  }

  60% {
    opacity: 1;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 17px;
  }
}

@keyframes sandFillup {
  0% {
    opacity: 0;
    height: 0;
  }

  60% {
    opacity: 1;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 17px;
  }
}

@-webkit-keyframes sandDeplete {
  0% {
    opacity: 0;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  1% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  24% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  25% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  50% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  90% {
    opacity: 1;
    top: 41px;
    height: 0;
    width: 10px;
    left: 20px;
  }
}

@keyframes sandDeplete {
  0% {
    opacity: 0;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  1% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  24% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  25% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  50% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  90% {
    opacity: 1;
    top: 41px;
    height: 0;
    width: 10px;
    left: 20px;
  }
}
</style>
