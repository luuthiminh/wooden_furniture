<template>
  <div>
    <div class="nav pt-36 pb-3 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item">
            <router-link to="customerIndex">Home </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="#">Customize Furnitrue</router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div class="mx-28 max-md:mx-4">
      <h1 class="font-bold text-lg">Customize Furniture</h1>
      <span>
        <router-link
          to="/StoreIntroduction"
          class="text-blue-600 after:content-['_↗'] ..."
          target="_blank"
          >Luan Len Furniture</router-link
        >
        specializes in designing and processing wooden furniture products
        according to the requirements of all customers. With more than 12 years
        of experience in the field of manufacturing wooden furniture products.
        We are proud to be one of the stores with many years of experience in
        the wood product manufacturing industry. We always meet all customer
        requirements and always satisfy the most demanding customers
        nationwide.</span
      >
      <h1 class="font-bold text-center text-lg text-red-500 py-3">
        Reasons you should choose our store for your home?
      </h1>
      <ul class="list-decimal leading-10 ml-3">
        <li>
          We are a direct factory so products always have better prices than the
          market
        </li>
        <li>
          We have 12 years of experience in the profession and always receive
          satisfaction from customers
        </li>
        <li>
          Products always meet the most stringent requirements. Guaranteed the
          output will be 99.99% similar to the design you provide.
        </li>
        <li>Our staff is always ready to serve you 24/7</li>
        <li>Hotline: 0398677620. Contact now for free consultation</li>
      </ul>
      <div class="pt-5">
        <h1 class="text-center font-semibold text-lg">
          REGISTRATION FORM DESIGNED ACCORDING TO REQUEST
        </h1>
        <h2 class="text-center text-red-500 text-base mb-10 font-semibold">
          PLEASE COMPLETE ALL INFORMATION
        </h2>
        <div class="form_register px-6 py-6 mb-10 relative">
          <div class="w-full items-center gap-x-6 pb-3">
            <label for="exampleFormControlInput1">Picture</label>
            <input
              @change="onFileChange"
              id="picture"
              type="file"
              class="flex bg-slate-100 h-10 w-full rounded-md border border-input px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Furniture Name</label>
            <input
              v-model="furnitureName"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="10m"
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
                <option selected>Choose color</option>
                <option value="1">Color 1</option>
                <option value="2">Color 2</option>
                <option value="3">Color 3</option>
              </select>
            </div>
            <div class="cateory form-group">
              <label for="exampleFormControlSelect1">Category ID</label>
              <select
                v-model="categoryId"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option selected>Choose label</option>
                <option value="1">Label 1</option>
                <option value="2">Label 2</option>
                <option value="3">Label 3</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-x-6">
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
                v-model="woodId"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option selected>Choose wood</option>
                <option value="1">Wood 1</option>
                <option value="2">Wood 2</option>
                <option value="3">Wood 3</option>
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
              v-model="date"
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mt-10 mb-20">
            <button
              class="px-4 py-2 text-white ring-offset-2 ring-2 bg-slate-600 form-group right-7 absolute rounded"
              @click="customizeOrder"
            >
              Order
            </button>
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
    return {};
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async customizeOrder() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("customizeFurnitureName", this.furnitureName);
      formData.append("CategoryId", this.categoryId);
      formData.append("ColorId", this.colorId);
      formData.append("Height", this.height);
      formData.append("Length", this.length);
      formData.append("Width", this.width);
      formData.append("WoodId", this.woodId);
      formData.append("Quantity", this.quantities);
      formData.append("Description", this.description);
      formData.append("DesiredCompletionDate", this.date);
      try {
        const response = await axios.post(
          "customer/customize-furnitures/create",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
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
li {
  font-weight: 500;
}
.form_register {
  border: 1px solid #e5e4e4;
  border-radius: 6px;
}
.moon .form_register {
  border: 1px solid #918e8e;
}
label {
  font-weight: 500;
}
.moon h1 {
  /* color: #dd973c; */
  color: #fad5a6;
}
.moon .form-control,
.moon input {
  background-color: #e2e8f1;
}
.moon input {
  color: #6a3f07;
}
@media only screen and (max-width: 63.9375em) {
  nav {
    display: none;
  }
  span,
  li {
    font-size: 90%;
    margin-block-start: 1em;
    text-align: justify;
    word-wrap: break-word;
    font-weight: 500;
    line-height: 28px;
  }
  label {
    font-size: 90%;
  }
}
/*Mobile: width<780px*/
@media only screen and (max-width: 46.25em) {
}
/*Tablet: width>=740px and width < 1024px*/
@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
}
@media only screen and (width: 64em) {
}
/*laptop*/
@media only screen and (min-width: 73em) and (max-width: 81.25em) {
}
</style>
