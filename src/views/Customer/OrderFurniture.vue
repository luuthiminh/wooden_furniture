<template>
  <div class="pt-36 px-40">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent text-xs pt-3">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">All Product</a></li>
        <li class="breadcrumb-item active" aria-current="page">Sofa</li>
      </ol>
    </nav>
  </div>
  <div class="bg-neutral-100 px-40 pb-10">
    <div><h1 class="font-semibold pt-4 text-lg">Order Payment</h1></div>
    <div class="mt-3 mb-2">
      <div class="bg-white rounded-md px-3 py-2">
        <span class="text-red-600"
          ><i class="fa-solid fa-location-dot"></i> Address</span
        >
        <br />
        <div class="py-2 flex gap-x-4">
          <span class="font-semibold">Luu Thi Minh - 0398677620 </span>
          <span>Quang Hung-Phu Cu-Hung Yen</span>
          <div
            class="border-solid border-1 border-red-500 text-red-500 px-1 text-sm"
          >
            <span>Default</span>
          </div>
          <div class="font-semibold text-amber-900">
            <router-link to="/"> Change </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-md px-3 py-2">
      <div v-if="furnitures.length">
        <div v-for="f in furnitures" :key="f.furnitureSpecificationId">
          <div class="card mb-3">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div>
                    <img
                      src="@/assets/images/category/shelves_tv/shelves_11.png"
                      class="img-fluid rounded-3"
                      alt="Shopping item"
                      style="width: 65px"
                    />
                  </div>
                  <div class="ms-3">
                    <h5>{{ f.furnitureName }}</h5>
                    <p class="small mb-0">14 x 16m, Yellow</p>
                  </div>
                </div>
                <div class="d-flex flex-row align-items-center">
                  <div style="width: 50px">
                    <h5 class="fw-normal mb-0">2</h5>
                  </div>
                  <div style="width: 80px">
                    <h5 class="mb-0">$900</h5>
                  </div>
                  <a href="#!" style="color: #cecece"
                    ><i class="fas fa-trash-alt"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-md px-3 py-2 my-3">
      <div class="flex gap-x-4">
        <i class="bi bi-currency-dollar text-yellow-500"></i>
        <label class="font-medium">Point</label>
      </div>
      <div class="absolute right-0">
        <span>40</span>
        <input
          class="form-check-input"
          type="checkbox"
          v-modal="point"
          id="flexCheckDefault"
        />
      </div>
    </div>
    <div class="bg-white rounded-md px-3 py-2">
      <div class="card rounded-3">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="mb-0 text-lg font-medium">Payment Method</h5>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose payment</option>
            <option value="1">Cash on delivery</option>
            <option value="2">QR</option>
            <option value="3">Domestic Bank</option>
            <option value="4">International Bank</option>
          </select>
          <hr class="my-4" />

          <div class="d-flex justify-content-between">
            <p class="mb-2">Subtotal</p>
            <p class="mb-2">{{}}</p>
          </div>

          <!-- <div class="d-flex justify-content-between">
            <p class="mb-2">Shipping</p>
            <p class="mb-2">$20.00</p>
          </div> -->

          <div class="d-flex justify-content-between mb-4">
            <p class="mb-2">Total</p>
            <p class="mb-2">$4818.00</p>
          </div>

          <button
            type="button"
            class="btn_buy btn-block btn-lg float-right w-1/12"
          >
            <div class="d-flex justify-content-between">
              <span>BUY <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
            </div>
          </button>
        </div>
      </div>
      <!-- </div>
          </div> -->
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
  created() {
    this.getFurnitureOrder();
  },
  methods: {
    async getFurnitureOrder() {
      try {
        const response = await axios.get(
          "customer/furnitures/" + this.$route.params.id
        );
        this.furnitures = response.data;
        this.isShow = false;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
}
.btn_buy {
  background-color: rgb(57, 55, 55);
  color: white;
  font-size: 90%;
}
.card .mb-3 {
  border-top: 1px solid rgb(180, 178, 178);
}
</style>
