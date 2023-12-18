<template>
  <div>
    <div class="nav pt-36 pb-3 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item font-semibold text-yellow-950">
            <router-link to="customerIndex">Home</router-link>
          </li>

          <li class="breadcrumb-item active font-medium" aria-current="page">
            Customize Furnitrue
          </li>
        </ol>
      </nav>
    </div>
    <div class="max-md:mx-4">
      <div class="mx-28">
        <h1 class="font-bold text-lg">Customize Furniture</h1>
        <span>
          <router-link
            to="/StoreIntroduction"
            class="text-blue-600 after:content-['_↗'] ..."
            target="_blank"
            >Luan Len Furniture</router-link
          >
          specializes in designing and processing wooden furniture products
          according to the requirements of all customers. With more than 12
          years of experience in the field of manufacturing wooden furniture
          products. We are proud to be one of the stores with many years of
          experience in the wood product manufacturing industry. We always meet
          all customer requirements and always satisfy the most demanding
          customers nationwide.</span
        >
        <h1 class="font-bold text-center text-lg text-red-500 py-3">
          Reasons you should choose our store for your home?
        </h1>
        <ul class="list-decimal leading-10 ml-3">
          <li>
            We are a direct factory so products always have better prices than
            the market
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
        </div>
      </div>
      <div
        class="grid grid-cols-2 bg-white rounded-lg max-sm:block max-sm:w-8/12 mb-10"
      >
        <div class="img max-sm:hidden">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="@/assets/images/category/living.png"
                  class="d-block w-100 rounded-md"
                  alt="livingroom"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Livingroom</h5>
                  <p>The living room where the family gathers..</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="@/assets/images/category/alat.png"
                  class="d-block w-100 rounded-md"
                  alt="alat"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Worship room</h5>
                  <p>Ornamental worship room in design.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="@/assets/images/category/bedroom.png"
                  class="d-block w-100 rounded-md"
                  alt="bedroom"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Bedroom</h5>
                  <p>The bedroom where you can be yourself.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="@/assets/images/category/kitchen.png"
                  class="d-block w-100"
                  alt="kitchen"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Kitchen</h5>
                  <p>The kitchen is a loving firehouse..</p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
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
              data-bs-target="#carouselExampleCaptions"
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
        <div class="">
          <form class="px-10 max-sm:px-3" @submit.prevent="customizeOrder">
            <div class="w-full items-center gap-x-6 pb-3">
              <label for="exampleFormControlInput1">Picture</label>
              <div class="flex">
                <input
                  id="picture"
                  type="file"
                  accept=".png, .jpg, .jpeg, video/mp4,video/mkv, video/x-m4v,video/*"
                  :maxFileSize="1000000"
                  ref="file"
                  multiple
                  @change="onFile"
                  required
                  class="bg-slate-100 h-10 w-full rounded-md border border-input px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                />
                <i class="bi bi-exclamation text-yellow-400"></i>
              </div>
              <p class="text-xs mt-1 font-mediudm ml-1 opacity-90">
                You can upload image or video
              </p>
              <div class="image_upload flex gap-x-4">
                <div v-if="url" class="grid grid-cols-4 gap-x-4">
                  <div v-for="url in arrayUrl" :key="url" class="flex">
                    <img :src="url" alt="image" />
                    <div class="shadow rounded-md h-5 px-1 hover:bg-slate-500">
                      <label
                        @click="HandleRemoveImage(url)"
                        class="bi bi-x cursor-pointer absolute rounded-md px-1 bg-yellow-800 text-white"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-x-9">
              <div class="form-group">
                <label for="exampleFormControlInput1">Name Furniture</label>
                <input
                  v-model="cusfurnitureName"
                  type="text"
                  class="form-control w-10/12"
                  id="exampleFormControlInput1"
                  required
                  @input="validateName"
                />
                <p
                  v-if="!messageErrorName"
                  class="text-xs mt-1 font-mediudm ml-1 opacity-90"
                >
                  The name of the furniture cannot be less than
                  <b>2</b> characters or exceed <b>50</b> characters
                </p>
                <p
                  v-else-if="messageSucessName"
                  class="success text-xs mt-1 font-mediudm ml-1 opacity-90"
                >
                  {{ messageSucessName }}
                </p>
                <p
                  v-else
                  class="error text-xs mt-1 font-mediudm ml-1 opacity-90"
                >
                  {{ messageErrorName }}
                </p>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Quantity</label>
                <input
                  v-model="quantityFurniture"
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  :min="1"
                  required
                />
              </div>
            </div>
            <div class="grid grid-cols-3 gap-x-4 mt-3">
              <div>
                <label
                  for="exampleInputEmail1"
                  class="form-label font-medium w-10/12"
                  >Color</label
                >
                <select
                  v-if="colors.length"
                  v-model="colorId"
                  class="form-select text-sm"
                  aria-label="Default select example"
                  required
                >
                  <!-- <option value="1" selected>--Choose Color--</option> -->
                  <option
                    v-for="co in colors"
                    :key="co.colorsId"
                    :value="co.colorsId"
                  >
                    {{ co.colorName }}
                  </option>
                </select>
              </div>
              <div class="cateory form-group">
                <label for="exampleFormControlSelect1">Category</label>
                <select
                  v-if="categories.length"
                  v-model="categoryId"
                  class="form-select w-10/12"
                  id="exampleFormControlSelect1"
                  required
                >
                  <option
                    v-for="ca in categories"
                    :key="ca.categoryId"
                    :value="ca.categoryId"
                  >
                    {{ ca.categoryName }}
                  </option>
                </select>
              </div>
              <div>
                <label
                  for="exampleInputEmail1"
                  class="form-label font-medium w-10/12"
                  >Wood</label
                >
                <select
                  v-if="woods.length"
                  v-model="woodId"
                  class="form-select text-sm"
                  aria-label="Default select example"
                  required
                >
                  <option v-for="w in woods" :key="w.woodId" :value="w.woodId">
                    {{ w.woodType }}
                  </option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-x-24 mt-3">
              <div class="form-group">
                <label for="exampleFormControlInput1">Height</label>
                <div class="flex gap-x-4">
                  <input
                    v-model="height"
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    :min="1"
                    required
                  />
                  <p class="flex items-center font-medium">m</p>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Length</label>
                <div class="flex gap-x-4">
                  <input
                    v-model="length"
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    :min="1"
                    required
                  />
                  <p class="flex items-center font-medium">m</p>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Width</label>
                <div class="flex gap-x-4">
                  <input
                    v-model="width"
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    :min="1"
                    required
                  />
                  <p class="flex items-center font-medium">m</p>
                </div>
              </div>
            </div>
            <div class="mt-3">
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
                  required
                  @input="validateDate"
                />
                <p
                  v-if="!messageErrorDate"
                  class="text-xs mt-1 font-mediudm ml-1 opacity-90"
                >
                  Desired completion date must be greater than current time
                </p>
                <p
                  v-else-if="messageSucessName"
                  class="success text-xs mt-1 font-mediudm ml-1 opacity-90"
                >
                  {{ messageSucessName }}
                </p>
                <p
                  v-else
                  class="error text-xs mt-1 font-mediudm ml-1 opacity-90"
                >
                  {{ messageErrorDate }}
                </p>
              </div>
            </div>
            <div class="form-group mt-3">
              <label for="exampleFormControlInput1">Description</label>
              <input
                v-model="description"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                required
                @input="validateDescription"
              />
              <p
                v-if="!messageErrorDescription"
                class="text-xs mt-1 font-mediudm ml-1 opacity-90"
              >
                Description cannot be less than <b>2</b> characters or exceed
                <b>500</b>
                characters
              </p>
              <p
                v-else-if="messageErrorDescription"
                class="success text-xs mt-1 font-mediudm ml-1 opacity-90"
              >
                {{ messageErrorDescription }}
              </p>
              <p v-else class="error text-xs mt-1 font-mediudm ml-1 opacity-90">
                {{ messageErrorDescription }}
              </p>
            </div>
            <div class="button_order rounded-md mt-4 text-center">
              <button type="submit" class="btn text-white">Order</button>
            </div>
          </form>
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
      url: "",
      arrayUrl: [],
      colors: [],
      categories: [],
      woods: [],
      messageErrorName: "",
      messageSucessName: "",
      messageErrorDate: "",
      messageErrorDesciption: "",
      messageSucessDescription: "",
      messageSucessDate: "",
      isMsgError: false,
    };
  },
  created() {
    this.getAllColors();
    this.getAllCategories();
    this.getAllWoods();
    // this.validateForm();
  },
  methods: {
    async getAllColors() {
      try {
        const response = await axios.get("assistant/shop-data/colors");
        this.colors = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getAllCategories() {
      try {
        const response = await axios.get("shopOwner/shop-data/categories");
        this.categories = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllWoods() {
      try {
        const response = await axios.get("Assistant/shop-data/woods");
        this.woods = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    onFile(event) {
      this.arrayFile = event.target.files;
      if (this.arrayFile) {
        for (let i = 0; i < event.target.files.length; i++) {
          this.url = URL.createObjectURL(event.target.files[i]);
          this.arrayUrl.push(this.url);
        }
      }
    },
    HandleRemoveImage(url) {
      this.arrayUrl = this.arrayUrl.filter((item) => item !== url);
    },
    validateName() {
      if (
        !this.cusfurnitureName ||
        this.cusfurnitureName.length < 2 ||
        this.cusfurnitureName.length > 50
      ) {
        this.messageErrorName = "Name Furniture is invalid.";
        return false;
      } else {
        this.messageSucessName = "Name Furniture is valid.";
        return true;
      }
    },
    validateDescription() {
      if (
        !this.description ||
        this.description.length < 2 ||
        this.description.length > 500
      ) {
        this.messageErrorDescription = "Description is invalid.";
        return false;
      } else {
        this.messageSucessDescription = "Description is valid";
        return true;
      }
    },
    validateDate() {
      if (!this.completionDate || new Date(this.completionDate) <= new Date()) {
        this.messageErrorDate = "Desired completion date is not valid";
        return false;
      } else {
        this.messageSucessDate = "Desired completion date is valid";
        return true;
      }
    },
    async customizeOrder() {
      // if (
      //   !this.validateName ||
      //   !this.validateDate ||
      //   !this.validateDescription
      // ) {
      //   console.error("Vui lòng kiểm tra lại thông tin đặt hàng.");
      //   return;
      // }
      const formData = new FormData();
      if (this.arrayFile.length > 0) {
        for (var i = 0; i < this.arrayFile.length > 0; i++) {
          formData.append("attachments", this.arrayFile[i]);
        }
      }
      formData.append("customizeFurnitureName", this.cusfurnitureName);
      formData.append("categoryId", this.categoryId);
      formData.append("colorId", this.colorId);
      formData.append("height", this.height);
      formData.append("length", this.length);
      formData.append("width", this.width);
      formData.append("woodId", this.woodId);
      formData.append("quantity", "10");
      formData.append("description", this.description);
      formData.append("desiredCompletionDate", this.completionDate);
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
        if (response.status === 200) {
          alert("Order success");
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
.button_order {
  background-color: #4c3b25ed;
  font-weight: 400;
  color: #fff2dd;
  font-size: smaller;
}
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
.max-md:mx-4 li {
  font-weight: 500;
}
.form-control,
.form-select {
  border: none;
  background-color: rgb(242, 246, 249);
}
.image_upload {
  max-width: 100%;
  max-height: 141px;
  overflow: hidden;
}
.form_register {
  border: 1px solid #e5e4e4;
  border-radius: 6px;
}
.moon .form_register {
  border: 1px solid #918e8e;
}
label {
  color: #472307;
  font-weight: 600;
  font-size: 14px;
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
.list-decimal li {
  font-size: 15px;
  font-weight: 500;
}
input {
  height: 80%;
}
.form-control {
  height: 32%;
  font-size: 15px;
}
.form-group {
  margin-bottom: 0rem;
}
select {
  font-size: 14px;
}
</style>
