<template>
  <div
    class="mx-40 mt-3 h-8 flex items-center text-sm font-medium text-slate-800"
  >
    <p>Homepage/ Detail Page</p>
  </div>
  <div class="funiture_detail mx-40">
    <div class="header">
      <div class="furniture detail grid grid-cols-2 gap-7 mt-6 leading-10">
        <div class="img_product border border-4 border-indigo-600">
          <img
            class="px-3 py-3"
            src="@/assets/images/product/table_and_chair_set/set2.png"
            alt="product1"
          />
        </div>
        <div class="furniture_infor">
          <div>
            <h1 class="text-lg font-bold">Table and Chair Set</h1>
          </div>
          <div>
            <span>ID Furniture: F-001</span>
          </div>
          <div>
            <span class="font-semibold">Status: </span>
            <span>Avaliable </span>
          </div>
          <div>
            <span class="font-semibold">Category: </span>
            <span>Table and Chair</span>
          </div>
          <div class="my-3">
            <div class="w-full bg-slate-200 h-px"></div>
            <span class="text-red-700 text-lg font-medium">$1500</span>
            <div class="w-full bg-slate-200 h-px"></div>
          </div>
          <div>
            <span class="font-semibold">Color: </span>
            <span>Gray</span>
          </div>
          <div>
            <span class="font-semibold">Size: </span>
            <span class="border border-1 border-gray-900 px-2 py-1"
              >16 x 2,2m</span
            >
          </div>
          <div></div>
          <div class="flex flex-cols-2 gap-0 my-2">
            <div class="btn add_to_card">
              <button class="text-sm btn bg-neutral-700 text-white">
                ADD TO CART
              </button>
            </div>
            <div class="btn order">
              <button class="btn text-sm bg-neutral-700 text-white">BUY</button>
            </div>
          </div>
          <div class="more_infor">
            <table class="table table-bordered font-">
              <thead>
                <tr>
                  <th scope="col">Wood</th>
                  <th scope="col">First</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Width</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">Quantity</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">Star</th>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="content mt-14">
        <div class="flex flex-cols-3 gap-72">
          <div class="description">
            <router-link to="" class="text-lg font-medium"
              >Description</router-link
            >
          </div>
          <div>
            <span class="text-lg font-medium">Storage instructions</span>
          </div>
          <div>
            <span class="text-lg font-medium">FeedBack</span>
          </div>
        </div>
        <div class="h-px w-full bg-slate-200 mt-2"></div>
        <div class="content mt-3 leading-9">
          <span
            >Be the first to receive this product while we have it in
            stock.</span
          >
          <br />
          <span
            >This is a demonstration store. You can buy this product here</span
          >
          <br />
          <span
            >The round shape and fabric composition make the Casette a unique
            and versatile bag that zips to keep all the contents safe and
            secure. There are many sizes and colors.</span
          >
          <br />
          <span>
            Shipping cost is based on weight. Simply add products to your cart
            and use the Shipping Calculator to view shipping prices.
          </span>
        </div>
      </div>
      <div class="More Product my-14">
        <h1 class="text-center font-semibold text-2xl mb-4">More Product</h1>
        <div class="mb-3 h-px w-1/12 bg-slate-200"></div>
        <div class="grid grid-cols-4 gap-3">
          <div class="product rounded-md overflow-hidden">
            <div>
              <img
                src="@/assets/images/product/table_and_chair_set/set2.png"
                alt="product2"
              />
            </div>
            <div class="info_product">
              <h1>Name Product</h1>
              <span>Price: $1000</span>
              <br />
              <span>Quantity: 5</span>
              <div class="button_card">
                <router-link to="" class="btn bg-neutral-700 my-8"
                  >ADD TO CARD</router-link
                >
              </div>
            </div>
          </div>
          <div class="product">
            <div>
              <img src="@/assets/images/category/bed.png" alt="" />
            </div>
            <div class="info_product">
              <h1>Name Product</h1>
              <span>Price: $1000</span>
              <br />
              <span>Quantity: 5</span>
              <div class="button_card">
                <router-link to="" class="btn bg-neutral-700 my-8"
                  >ADD TO CARD</router-link
                >
              </div>
            </div>
          </div>
          <div class="product rounded-md overflow-hidden">
            <div>
              <img
                src="@/assets/images/product/table_and_chair_set/set2.png"
                alt="product2"
              />
            </div>
            <div class="info_product">
              <h1>Name Product</h1>
              <span>Price: $1000</span>
              <br />
              <span>Quantity: 5</span>
              <div class="button_card">
                <router-link to="" class="btn bg-neutral-700 my-8"
                  >ADD TO CARD</router-link
                >
              </div>
            </div>
          </div>
          <div class="product rounded-md overflow-hidden">
            <div>
              <img
                src="@/assets/images/product/table_and_chair_set/set2.png"
                alt="product2"
              />
            </div>
            <div class="info_product">
              <h1>Name Product</h1>
              <span>Price: $1000</span>
              <br />
              <span>Quantity: 5</span>
              <div class="button_card">
                <router-link to="" class="btn bg-neutral-700 my-8"
                  >ADD TO CARD</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ContentDetail from "@/components/contentDetail.vue";

// export default {
//   name: "ContentDetail",
//   components: {
//     ContentDetail,
//   },
// };
</script>

<style>
h1 {
  color: #212529;
}

.button_card .btn {
  color: white;
  font-size: 13px;
  margin-left: 30%;
}
</style>
