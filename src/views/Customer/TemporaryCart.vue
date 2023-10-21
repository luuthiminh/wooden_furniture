<template>
  <div class="bg-neutral-100 text-slate-700">
    <div class="pt-36 px-36">
      <div class="bg-white">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-neutral-100 text-xs">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">All Product</a></li>
            <li class="breadcrumb-item active" aria-current="page">Sofa</li>
          </ol>
        </nav>
      </div>
      <h1 class="font-semibold pb-3 text-lg">Shopping Cart</h1>
      <div class="grid grid-cols-7 gap-x-7">
        <div class="col-span-5 cart">
          <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
              <div class="col">
                <div class="ibox">
                  <div class="ibox-title">
                    <span class="pull-right"
                      >(<strong>{{ cart.length }}</strong
                      >) products</span
                    >
                    <h5>All furniture in your cart</h5>
                  </div>
                  <div v-if="cart.length">
                    <div
                      class="ibox-content"
                      v-for="furniture in cart"
                      :key="furniture.furnitureSpecificationId"
                    >
                      <div class="table-responsive">
                        <table class="table shoping-cart-table">
                          <tbody>
                            <tr>
                              <td>
                                <div class="form-check mt-5">
                                  <input
                                    type="checkbox"
                                    id="checkbox"
                                    v-model="checked"
                                  />
                                </div>
                              </td>
                              <td width="90">
                                <div class="cart-product-imitation">
                                  <img
                                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td class="desc">
                                <h3>
                                  <a href="#" class="text-navy">
                                    {{ furniture.furnitureName }}
                                  </a>
                                </h3>
                                <p class="small">
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is
                                </p>
                                <dl class="flex flex-cols-2 small m-b-none">
                                  <dt class="pr-2">Color:</dt>
                                  <dd>
                                    {{ furniture.furnitureSpecificationName }}
                                  </dd>
                                </dl>

                                <div class="flex flex-col-2 gap-x-2">
                                  <a href="#" class="text-muted"
                                    ><i class="fa-regular fa-heart"></i> Add
                                    Wish List</a
                                  >
                                  |
                                  <div
                                    @click.prevent="removeCart(furniture)"
                                    class="text-muted cursor-pointer"
                                  >
                                    <i class="fa fa-trash"></i>
                                    Remove item
                                  </div>
                                </div>
                              </td>

                              <td>
                                {{ furniture.cost }}
                                <s class="small text-muted">$230,00</s>
                              </td>
                              <td width="65">
                                <input
                                  v-model="furniture.quantity"
                                  type="text"
                                  class="form-control"
                                  @input="totalPrice(furniture)"
                                />
                              </td>
                              <td>
                                <h4>{{ total }}</h4>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="summary">
            <div>
              <h5 class="font-semibold text-base">Summary</h5>
            </div>
            <hr />
            <div class="row pt-4">
              <div class="col" style="padding-left: 0">All Furniture</div>
              <div class="col text-right">{{ cart.length }}</div>
            </div>
            <div class="mt-2">
              <p>SHIPPING</p>
              <img src="@/assets/images/freeship.png" alt="freeship" />
            </div>
            <div
              class="row"
              style="border-top: 1px solid rgba(0, 0, 0, 0.1); padding: 2vh 0"
            >
              <div class="col">TOTAL PRICE</div>
              <div class="col text-right">$ 137.00</div>
            </div>
            <router-link to="orderbill">
              <button class="btn btn_checkout">ORDER</button>
            </router-link>
          </div>
          <div class="ibox mt-3 leading-8">
            <div class="ibox-title">
              <h5>Support</h5>
            </div>
            <div class="ibox-content text-center">
              <h3><i class="fa fa-phone"></i> 0398677620</h3>
              <span class="small">
                Please contact with us if you have any questions. We are
                avalible 24h.
              </span>
            </div>
          </div>
          <div class="pt-4">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="@/assets/images/advertisement/customize.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="@/assets/images/tips/4.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="@/assets/images/tips/1.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
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
                data-bs-target="#carouselExampleControls"
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
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      cart: [],
      total: "",
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    async getCart() {
      try {
        const response = await axios.get("customer/cart");
        this.cart = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    totalPrice(furniture) {
      const price = furniture.cost * furniture.quantity;
      this.total = price;
    },
    async removeCart(furniture) {
      try {
        const response = await axios.delete(
          "customer/cart/remove/" + furniture.furnitureSpecificationId
        );
        if (response.status === 200) {
          alert("Remove furniture from cart successfully");
        }
      } catch (error) {
        console.error(error.response.data.message);
      }
    },
  },
};
</script>
<style scoped>
body {
  background: #ddd;
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  font-size: 0.8rem;
  font-weight: bold;
}

.summary {
  background-color: white;
  border-radius: 8px;
  padding: 4vh;
  color: rgb(65, 65, 65);
}
@media (max-width: 767px) {
  .summary {
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
  }
}
.summary .col-2 {
  padding: 0;
}
.summary .col-10 {
  padding: 0;
}
.row {
  margin: 0;
}
.title b {
  font-size: 1.5rem;
}
.main {
  margin: 0;
  padding: 2vh 0;
  width: 100%;
}
.col-2,
.col {
  padding: 0 1vh;
}
a {
  padding: 0 1vh;
}
.close {
  margin-left: auto;
  font-size: 0.7rem;
}
.summary {
  font-size: 13px;
}
.back-to-shop {
  margin-top: 2.5rem;
}
h5 {
  margin-top: 2vh;
}
hr {
  margin-top: 1.25rem;
}
form {
  padding: 2vh 0;
}
select {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.5vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
.btn {
  background-color: rgb(57, 55, 55);
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 5px;
}
.btn:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  -webkit-user-select: none;
  transition: none;
}
.btn:hover {
  color: white;
}
a {
  color: black;
}
a:hover {
  color: black;
  text-decoration: none;
}

/* new */
h3 {
  font-size: 16px;
  margin-left: -6px;
}
.text-navy {
  color: #1ab394;
}
.cart-product-imitation {
  text-align: center;
  padding-top: 30px;
  height: 80px;
  width: 80px;
  background-color: #f8f8f9;
}
.product-imitation.xl {
  padding: 120px 0;
}
.product-desc {
  padding: 20px;
  position: relative;
}
.ecommerce .tag-list {
  padding: 0;
}
.ecommerce .fa-star {
  color: #d1dade;
}
.ecommerce .fa-star.active {
  color: #f8ac59;
}
.ecommerce .note-editor {
  border: 1px solid #e7eaec;
}
table.shoping-cart-table {
  margin-bottom: 0;
}
table.shoping-cart-table tr td {
  border: none;
  text-align: right;
}
table.shoping-cart-table tr td.desc,
table.shoping-cart-table tr td:first-child {
  text-align: left;
}
table.shoping-cart-table tr td:last-child {
  width: 80px;
}
.ibox {
  clear: both;
  margin-bottom: 25px;
  margin-top: 0;
  padding: 0;
}
.ibox.collapsed .ibox-content {
  display: none;
}
.ibox:after,
.ibox:before {
  display: table;
}
.ibox-title {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background-color: #ffffff;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 3px 0 0;
  color: inherit;
  margin-bottom: 0;
  padding: 14px 15px 7px;
  min-height: 48px;
}
.ibox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 15px 20px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
}
.ibox-footer {
  color: inherit;
  border-top: 1px solid #e7eaec;
  font-size: 90%;
  background: #ffffff;
  padding: 10px 15px;
}
</style>
