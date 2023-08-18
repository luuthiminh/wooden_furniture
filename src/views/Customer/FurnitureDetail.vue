<template>
  <div class="content_detail bg-neutral-50 pt-28">
    <div class="mx-28 h-8 flex items-center text-sm font-medium text-slate-800">
      <p>Homepage/ Detail Page</p>
    </div>
    <div class="funiture_detail mx-24">
      <div class="flex flex-cols-3">
        <div
          class="col-span-2 furniture detail grid grid-cols-2 gap-7 mt-3 bg-white rounded-lg"
        >
          <div class="img_product border-4 border-indigo-600">
            <img
              class="px-3 py-3"
              src="@/assets/images/product/table_and_chair_set/set2.png"
              alt="product1"
            />
          </div>
          <div class="furniture_infor pt-2">
            <div>
              <h1 class="text-lg font-bold">Table and Chair Set</h1>
            </div>
            <div>
              <span>ID Furniture: F-001</span>
            </div>
            <div class="mt-3">
              <span class="font-semibold">Status: </span>
              <span>Avaliable </span>
            </div>
            <div>
              <span class="font-semibold">Category: </span>
              <span>Table and Chair</span>
            </div>
            <div class="my-3">
              <div class="w-10/12 bg-slate-200 h-px"></div>
              <span class="text-red-700 text-lg font-medium">$1500</span>
              <div class="w-10/12 bg-slate-200 h-px"></div>
            </div>
            <div>
              <span class="font-semibold">Color: </span>
              <span>Gray</span>
            </div>
            <div class="mt-3">
              <span class="font-semibold">Size: </span>
              <span class="border border-1 border-gray-900 px-2 py-1"
                >16 x 2,2m</span
              >
            </div>
            <div></div>
            <div class="flex flex-cols-2 my-3">
              <div class="btn add_to_card">
                <button class="text-sm btn bg-neutral-700 text-white">
                  ADD TO CART
                </button>
              </div>
              <div class="btn order">
                <button class="btn text-sm bg-neutral-700 text-white">
                  BUY
                </button>
              </div>
              <div class="icon_heart pl-3 pt-2">
                <div class="heart-container" title="Like">
                  <input type="checkbox" class="checkbox" id="Give-It-An-Id" />
                  <div class="svg-container">
                    <svg
                      viewBox="0 0 24 24"
                      class="svg-outline"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      class="svg-filled"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
                      ></path>
                    </svg>
                    <svg
                      class="svg-celebrate"
                      width="100"
                      height="100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="10,10 20,20"></polygon>
                      <polygon points="10,50 20,50"></polygon>
                      <polygon points="20,80 30,70"></polygon>
                      <polygon points="90,10 80,20"></polygon>
                      <polygon points="90,50 80,50"></polygon>
                      <polygon points="80,80 70,70"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="more_infor">
              <table class="table table-bordered w-6/12 text-sm">
                <thead>
                  <tr>
                    <th scope="col">Wood</th>
                    <th scope="col">First</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Width</th>
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
        <div
          class="grid grid-rows-4 h-96 w-7/12 bg-zinc-100 text-slate-700 mt-3 ml-3"
        >
          <div class="flex flex-cols-2 gap-4 items-center px-6">
            <div class="icon text-2xl">
              <i class="fa-solid fa-question"></i>
            </div>
            <div>
              <span class="text-lg font-medium leading-10">Quick question</span>
              <p class="text-xs font-normal">Answer up to 30 questions</p>
            </div>
          </div>
          <div class="flex flex-cols-2 gap-4 items-center px-6">
            <div class="icon text-2xl">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <span class="text-lg font-medium leading-10"
                >Warranty support</span
              >
              <p class="text-xs font-normal">Within 3 years</p>
            </div>
          </div>
          <div class="flex flex-cols-2 gap-4 items-center px-6">
            <div class="icon text-2xl">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div>
              <span class="text-lg font-medium leading-10">Quick question</span>
              <p class="text-xs font-normal">Answer up to 30 questions</p>
            </div>
          </div>
          <div class="flex flex-cols-2 gap-4 items-center px-6">
            <div class="icon text-2xl">
              <i class="fa-solid fa-headphones"></i>
            </div>
            <div>
              <span class="text-lg font-medium leading-10">Online support</span>
              <p class="text-xs font-normal">We support 24/7</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-md px-3 py-3 mt-5">
        <div class="description_furniture">
          <div class="description">
            <router-link to="" class="text-lg font-medium"
              >Description</router-link
            >
          </div>
        </div>
        <div class="h-px w-full bg-slate-200 mt-2"></div>
        <div class="content mt-3 leading-7 text-sm">
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
      <div class="bg-white rounded-md px-3 py-3 mt-4">
        <div class="storage_instructions">
          <div class="description">
            <router-link to="" class="text-lg font-medium"
              >Storage instructions</router-link
            >
          </div>
        </div>
        <div class="h-px w-full bg-slate-200 mt-2"></div>
        <div class="content mt-3 leading-8 text-sm">
          <span
            >We want you to be 100% satisfied with your purchase. Items can be
            returned or exchanged within 30 days of delivery.</span
          >
          <br />
          <span
            >For help, please contact our customer service department at support
            minhltgch200250@fpt.edu.vn</span
          >
        </div>
      </div>
      <div class="bg-white rounded-md px-3 py-3 mt-4">
        <div class="grid grid-cols-2 gap-x-44 w-full">
          <p class="font-semibold">1 comment</p>
          <div class="flex flex-cols-2 float-right pl-96">
            <span class="pr-3">Filters </span>
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                <span class="">Filters</span>
              </button>
              <ul class="dropdown-menu px-2 py-2 rounded-base">
                <li><a href="#">Lastest</a></li>
                <li><a href="#">Oldest</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="h-px w-full bg-slate-200 mt-2"></div>
        <div class="grid grid-cols-12 mt-3">
          <div class="col-span-1 avatar_feeedback py-4">
            <router-link to="/profileCusPage" style="text-decoration: none"
              ><img
                class="rounded-full w-16"
                src="https://ordinaryofficial.vn/wp-content/uploads/2022/12/con-gai-han-quoc.jpg"
                alt="avatar"
            /></router-link>
          </div>
          <div class="form-group col-span-11 pt-1">
            <textarea
              style="height: 50%"
              class="form-control mt-4"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="comment flex flex-cols-2">
          <div class="avtar">
            <router-link to="/profileCusPage" style="text-decoration: none"
              ><img
                class="rounded-full w-14"
                src="https://ordinaryofficial.vn/wp-content/uploads/2022/12/con-gai-han-quoc.jpg"
                alt="avatar"
            /></router-link>
          </div>
          <div class="pl-10">
            <h1 class="font-semibold">Luu Thi Minh</h1>
            <span class="text-base">Pretty</span>
            <br />
            <span class="text-xs">10:10AM</span>
          </div>
        </div>
        <div class="h-px w-full bg-slate-200 mt-2"></div>
      </div>
    </div>
    <div class="More Product my-14 mx-32">
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
</template>

<script setup></script>

<style>
h1 {
  color: #212529;
}

.button_card .btn {
  color: white;
  font-size: 13px;
  margin-left: 30%;
}
.flex.flex-cols-2.gap-4.items-center {
  border-bottom: 1px dashed #ccc;
}
/* icon heart */
.heart-container {
  --heart-color: rgb(255, 91, 137);
  position: relative;
  width: 30px;
  height: 30px;
  transition: 0.3s;
}

.heart-container .checkbox {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 20;
  cursor: pointer;
}

.heart-container .svg-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart-container .svg-outline,
.heart-container .svg-filled {
  fill: var(--heart-color);
  position: absolute;
}

.heart-container .svg-filled {
  animation: keyframes-svg-filled 1s;
  display: none;
}

.heart-container .svg-celebrate {
  position: absolute;
  animation: keyframes-svg-celebrate 0.5s;
  animation-fill-mode: forwards;
  display: none;
  stroke: var(--heart-color);
  fill: var(--heart-color);
  stroke-width: 2px;
}

.heart-container .checkbox:checked ~ .svg-container .svg-filled {
  display: block;
}

.heart-container .checkbox:checked ~ .svg-container .svg-celebrate {
  display: block;
}

@keyframes keyframes-svg-filled {
  0% {
    transform: scale(0);
  }

  25% {
    transform: scale(1.2);
  }

  50% {
    transform: scale(1);
    filter: brightness(1.5);
  }
}

@keyframes keyframes-svg-celebrate {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
    filter: brightness(1.5);
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
    display: none;
  }
}
</style>
