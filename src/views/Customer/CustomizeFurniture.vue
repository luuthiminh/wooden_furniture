<template>
  <div>
    <div class="nav pt-36 pb-3 mb-2">
      <nav aria-label="breadcrumb">
        <ol class="flex bg-none text-xs ml-32 max-sm:ml-3">
          <li class="breadcrumb-item">
            <router-link to="customerIndex">Home </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="#">Customize Furnitrue</router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div class="mx-32">
      <h1 class="font-bold text-lg">Customize Furniture</h1>
      <span
        >Luan Len Furniture specializes in designing and processing wooden
        furniture products according to the requirements of all customers. With
        more than 12 years of experience in the field of manufacturing wooden
        furniture products. We are proud to be one of the stores with many years
        of experience in the wood product manufacturing industry. We always meet
        all customer requirements and always satisfy the most demanding
        customers nationwide.</span
      >
      <h1 class="font-bold text-center text-lg text-red-500 py-3">
        Reasons you should choose our store for your home?
      </h1>
      <span
        >- We are a direct factory so products always have better prices than
        the market</span
      >
      <span
        >- We have 12 years of experience in the profession and always receive
        satisfaction from customers</span
      >
      <span
        >- Products always meet the most stringent requirements. Guaranteed the
        output will be 99.99% similar to the design you provide.</span
      >
      <span>- Our staff is always ready to serve you 24/7</span>
      <span>- Hotline: 0398677620. Contact now for free consultation</span>
      <div class="pt-5">
        <h1 class="text-center font-semibold text-lg">
          REGISTRATION FORM DESIGNED ACCORDING TO REQUEST
        </h1>
        <h2 class="text-center text-red-500 text-base mb-10 font-semibold">
          PLEASE COMPLETE ALL INFORMATION
        </h2>
        <form class="px-10 pt-3 max-sm:px-3 mb-5" @submit.prevent="">
          <div class="w-full items-center gap-x-6 pb-3">
            <label for="exampleFormControlInput1">Picture</label>
            <input
              id="picture"
              type="file"
              class="flex bg-slate-100 h-10 w-full rounded-md border border-input px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
            />
          </div>
          <div class="grid grid-cols-2 gap-x-6">
            <div class="color form-group">
              <label for="exampleFormControlSelect1">Color ID</label>
              <select
                v-model="colorId"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="cateory form-group">
              <label for="exampleFormControlSelect1">Category ID</label>
              <select
                v-model="categoryId"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div class="flex flex-cols-3 gap-x-6">
            <div class="form-group">
              <label for="exampleFormControlInput1">Height</label>
              <input
                v-model="height"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="10m"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Length</label>
              <input
                v-model="length"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="10m"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Width</label>
              <input
                v-model="width"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="10m"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-x-6">
            <div class="color form-group">
              <label for="exampleFormControlSelect1">Wood ID</label>
              <select
                v-model="woodID"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Quantity</label>
              <input
                v-model="quantities"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="1.."
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Description</label>
            <input
              v-model="description"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="...."
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1"
              >Desired Completion Date</label
            >
            <input
              v-model="completionDate"
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="button_order float-right rounded-md my-2">
            <button type="submit" class="btn text-white">Order</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    async customizeOrder() {
      try {
        const response = await axios.post("customize-furnitures/create", {
          customizeFurnitureName: this.furnitureName,
          categoryId: this.categoryId,
          colorId: this.colorId,
          height: this.height,
          length: this.length,
          woodId: this.woodId,
          quantity: this.quantities,
          description: this.description,
          DesiredCompletionDate: this.desiredCompletionDate,
        });
        if (response.status === 201) {
          alert("Please confirm the code in your email!");
        }
      } catch (error) {
        this.message = error.response.data.message;
        console.error(error.response.data.message);
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
span {
  display: block;
  margin-block-start: 1em;
  text-align: justify;
  word-wrap: break-word;
  font-weight: 500;
  font-size: 15px;
  line-height: 28px;
}
form {
  border: 1px solid #e5e4e4;
  border-radius: 6px;
}
label {
  font-weight: 500;
}
</style>
