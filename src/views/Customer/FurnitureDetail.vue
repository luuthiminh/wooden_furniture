<template>
  <div class="content_detail bg-neutral-50 pt-28">
    <div class="mx-24 h-8 flex items-center text-sm font-medium text-slate-800">
      <p>Homepage/ Detail Page</p>
    </div>
    <div class="funiture_detail mx-24">
      <!-- <div>
        <h1 class="font-semibold pt-4 text-xl text-slate-700">
          Furniture Detail
        </h1>
      </div> -->
      <div class="flex flex-cols-2">
        <div class="furniture detail mt-3 bg-white rounded-lg">
          <div class="img grid grid-cols-2 gap-x-4">
            <div class="img_product border-4 border-indigo-600 w-10/12">
              <img
                class="px-3 py-3 pl-3"
                src="@/assets/images/category/shelves_tv/shelves_11.png"
                alt="product1"
              />
              <div class="image_all px-3 py-3">
                <div
                  class="h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 snap-y"
                >
                  <div class="">
                    <div v-if="furnitures.length" class="flex gap-x-2">
                      <div
                        class="product w-3/12"
                        v-for="furniture in furnitures"
                        :key="furniture.furnitureSpecificationId"
                      >
                        <div class="">
                          <div class="snap-start">
                            <div @click.prevent="InforFurniture(furniture)">
                              <div
                                class="border border-1 border-gray-900 px-2 py-2"
                              >
                                <img
                                  class=""
                                  src="@/assets/images/category/shelves_tv/shelves_11.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!furnitureIndex">
              <div class="image_all">
                <div>
                  <div class="product">
                    <div class="furniture_infor pt-2">
                      <div>
                        <h1 class="text-lg font-bold">
                          {{ furnitureFrist.furnitureName }}
                        </h1>
                        <div class="rating">
                          <input
                            value="5"
                            name="rate"
                            id="star5"
                            type="radio"
                          />
                          <label title="text" for="star5"></label>
                          <input
                            value="4"
                            name="rate"
                            id="star4"
                            type="radio"
                          />
                          <label title="text" for="star4"></label>
                          <input
                            value="3"
                            name="rate"
                            id="star3"
                            type="radio"
                            checked=""
                          />
                          <label title="text" for="star3"></label>
                          <input
                            value="2"
                            name="rate"
                            id="star2"
                            type="radio"
                          />
                          <label title="text" for="star2"></label>
                          <input
                            value="1"
                            name="rate"
                            id="star1"
                            type="radio"
                          />
                          <label title="text" for="star1"></label>
                        </div>
                      </div>
                      <div>
                        <span class="text-xs"
                          >ID Furniture:
                          {{ furnitureFrist.furnitureSpecificationId }}</span
                        >
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Start: </span>
                        <span>Avaliable </span>
                      </div>
                      <div>
                        <span class="font-semibold">Category: </span>
                        <span>Table and Chair</span>
                      </div>
                      <div class="my-3">
                        <div class="w-10/12 bg-slate-200 h-px"></div>
                        <span class="text-red-700 text-lg font-medium">{{
                          furnitureFrist.price
                        }}</span>
                        <div class="w-10/12 bg-slate-200 h-px"></div>
                      </div>
                      <div>
                        <span class="font-semibold">Color: </span>
                        <span>{{ furnitureFrist.color }}</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Height: </span>
                        <span
                          class="border border-1 border-gray-900 px-2 py-1"
                          >{{ furnitureFrist.height }}</span
                        >
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Width: </span>
                        <span
                          class="border border-1 border-gray-900 px-2 py-1"
                          >{{ furnitureFrist.width }}</span
                        >
                        <div class="mt-3">
                          <span class="font-semibold">Lenght: </span>
                          <span
                            class="border border-1 border-gray-900 px-2 py-1"
                            >{{ furnitureFrist.length }}</span
                          >
                        </div>
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
                            <input
                              type="checkbox"
                              class="checkbox"
                              id="Give-It-An-Id"
                            />
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
                              <th scope="col">{{ furnitureFrist.wood }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>Size</th>
                              <td>
                                {{ furnitureFrist.height }} x
                                {{ furnitureFrist.width }} x
                                {{ furnitureFrist.length }}
                              </td>
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
                </div>
              </div>
            </div>
            <div v-else>
              <div class="image_all">
                <div>
                  <div class="product">
                    <div class="furniture_infor pt-2">
                      <div>
                        <h1 class="text-lg font-bold">
                          {{ furnitureIndex.furnitureName }}
                        </h1>
                        <div class="rating">
                          <input
                            value="5"
                            name="rate"
                            id="star5"
                            type="radio"
                          />
                          <label title="text" for="star5"></label>
                          <input
                            value="4"
                            name="rate"
                            id="star4"
                            type="radio"
                          />
                          <label title="text" for="star4"></label>
                          <input
                            value="3"
                            name="rate"
                            id="star3"
                            type="radio"
                            checked=""
                          />
                          <label title="text" for="star3"></label>
                          <input
                            value="2"
                            name="rate"
                            id="star2"
                            type="radio"
                          />
                          <label title="text" for="star2"></label>
                          <input
                            value="1"
                            name="rate"
                            id="star1"
                            type="radio"
                          />
                          <label title="text" for="star1"></label>
                        </div>
                      </div>
                      <div>
                        <span class="text-xs"
                          >ID Furniture:
                          {{ furnitureIndex.furnitureSpecificationId }}</span
                        >
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Start: </span>
                        <span>Avaliable </span>
                      </div>
                      <div>
                        <span class="font-semibold">Category: </span>
                        <span>Table and Chair</span>
                      </div>
                      <div class="my-3">
                        <div class="w-10/12 bg-slate-200 h-px"></div>
                        <span class="text-red-700 text-lg font-medium">{{
                          furnitureIndex.price
                        }}</span>
                        <div class="w-10/12 bg-slate-200 h-px"></div>
                      </div>
                      <div>
                        <span class="font-semibold">Color: </span>
                        <span>{{ furnitureIndex.color }}</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Height: </span>
                        <span>{{ furnitureIndex.height }}</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Width: </span>
                        <span>{{ furnitureIndex.width }}</span>
                        <div class="mt-3">
                          <span class="font-semibold">Lenght: </span>
                          <span>{{ furnitureIndex.length }}</span>
                        </div>
                      </div>
                      <div class="flex flex-cols-2 gap-x-4 mt-2">
                        <label
                          for="exampleInputEmail1"
                          class="text-base form-label font-semibold mt-2"
                          >Quantity</label
                        >
                        <input
                          v-model="quantities"
                          type="email"
                          class="form-control h-1/12 w-2/12"
                        />
                        {{ quantities }}
                      </div>
                      <div class="flex flex-cols-2 my-3">
                        <div
                          class="btn add_to_card"
                          @click.prevent="handleAddToCart(furnitureIndex)"
                        >
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
                            <input
                              type="checkbox"
                              class="checkbox"
                              id="Give-It-An-Id"
                            />
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
                              <th scope="col">{{ furnitureIndex.wood }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>Size</th>
                              <td>
                                {{ furnitureIndex.height }} x
                                {{ furnitureIndex.width }} x
                                {{ furnitureIndex.length }}
                              </td>
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
                </div>
              </div>
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
          <span></span>
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
          <!-- <div class="col-span-1 avatar_feeedback py-4">
            <router-link to="/profileCusPage" style="text-decoration: none"
              ><img
                class="rounded-full w-16"
                src="https://ordinaryofficial.vn/wp-content/uploads/2022/12/con-gai-han-quoc.jpg"
                alt="avatar"
            /></router-link>
          </div> -->
          <!-- <div class="form-group col-span-11 pt-1">
            <textarea
              style="height: 50%"
              class="form-control mt-4"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div> -->
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
    <div class="more product mt-14 mx-32">
      <h1 class="text-center font-semibold text-2xl mb-4">More Product</h1>
      <hr class="w-1/12 mb-14" />
      <div
        class="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 snap-x overflow-y-hidden"
      >
        <div>
          <div v-if="moreFurniture.length">
            <div class="flex gap-10 pb-2">
              <div
                class="product"
                v-for="furniture in moreFurniture"
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
                          src="@/assets/images/category/shelves_tv/shelves.png"
                          alt=""
                        />
                      </router-link>
                      <div class="furniture_label">
                        <div v-if="furniture.label === 'New'">
                          <div
                            class="product_label bg-yellow-600 px-1 py-1 rounded-md ml-4"
                          >
                            <span class="text-white">{{
                              furniture.label
                            }}</span>
                          </div>
                        </div>
                        <div v-if="furniture.label === 'Hot Sale'">
                          <div
                            class="product_label bg-red-700 px-1 py-1 rounded-md"
                          >
                            <span class="text-white">{{
                              furniture.label
                            }}</span>
                          </div>
                        </div>
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
                      <div>
                        <span class="text-sm"
                          >Star: {{ furniture.voteStar
                          }}<i class="fa-solid fa-star pl-1 text-xs"></i
                        ></span>
                      </div>
                      <div>
                        <span class="text-sm">Sold: {{ furniture.sold }}</span>
                      </div>
                      <div class="button_buy py-3 px-2">
                        <router-link
                          :to="{
                            name: 'OrderBill',
                            params: { id: furniture.furnitureId },
                          }"
                        >
                          <button
                            class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                          >
                            Buy now
                          </button>
                        </router-link>
                      </div>
                      <div class="gap-x-4 text-xs">
                        <div @click="toggleWishlist(furniture)">
                          <i class="fa-regular fa-heart cursor-pointer"></i>
                          Add wish list
                        </div>
                        <div class="pt-2">
                          <button @click="showModal(furniture)" class="">
                            <i
                              class="fa-solid fa-square-plus cursor-pointer"
                            ></i>
                            More
                          </button>
                          <Modal
                            :size="size"
                            v-if="isShowModal"
                            @close="closeModal"
                          >
                            <template #header>
                              <div
                                class="flex items-center text-lg font-medium"
                              >
                                ALL Furniture
                              </div>
                            </template>
                            <template #body>
                              <div
                                class="product"
                                v-for="fur in furnitureModel"
                                :key="fur.furnitureId"
                              >
                                <div class="grid grid-cols-2 gap-x-7">
                                  <div class="image_product">
                                    <img
                                      src="@/assets/images/category/shelves_tv/shelves.png"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <div
                                      class="name furniture font-semibold pb-3 text-sm"
                                    >
                                      {{ fur.furnitureName }}
                                    </div>
                                    <div class="leading-4">
                                      <div
                                        class="grid grid-cols-2 gap-x-1 text-sm"
                                      >
                                        <span>Height</span>
                                        <span>{{ fur.height }}</span>
                                      </div>
                                      <div
                                        class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                      >
                                        <span>Width:</span>
                                        <span>{{ fur.width }}</span>
                                      </div>
                                      <div
                                        class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                      >
                                        <span>Lenght:</span>
                                        <span>{{ fur.length }}</span>
                                      </div>
                                      <div class="text-sm">
                                        <div
                                          class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                        >
                                          <span>Price:</span>
                                          <!-- <span>{{ fur.price }}</span> -->
                                          <!-- <span>$1000</span> -->
                                          <span class="text-red-500"
                                            >$2000</span
                                          >
                                        </div>
                                      </div>
                                      <div
                                        class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                      >
                                        <span>Color:</span>
                                        <span>{{ fur.color }}</span>
                                      </div>
                                      <div
                                        class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                      >
                                        <span>Wood:</span>
                                        <span>{{ fur.wood }}</span>
                                      </div>
                                    </div>
                                    <br />
                                  </div>
                                </div>
                              </div>
                            </template>
                            <template #footer>
                              <div class="flex justify-between">
                                <button
                                  @click="closeModal"
                                  type="button"
                                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                  Close
                                </button>
                              </div>
                            </template>
                          </Modal>
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
<script setup>
import { Modal } from "flowbite-vue";
import { ref } from "vue";

const isShowModal = ref(false);
const furnitureModel = ref([]);
function closeModal() {
  isShowModal.value = false;
}
async function showModal(furniture) {
  this.isShowModal = true;
  try {
    const response = await axios.get(
      "customer/furnitures/" + furniture.furnitureId
    );
    this.furnitureModel = response.data;
    console.log(furniture);
  } catch (error) {
    console.error(error);
  }
}
</script>
<script>
import axios from "axios";

export default {
  data() {
    return {
      furnitures: [],
      furnitureIndex: {},
      furnitureFrist: {},
      quantities: "",
      moreFurniture: [],
      feedbacks: [],
    };
  },
  created() {
    this.getAllFurnitureDetail();
    this.getMoreFurniture();
    this.getUserFeedback();
  },
  methods: {
    async getAllFurnitureDetail() {
      try {
        const response = await axios.get(
          "customer/furnitures/" + this.$route.params.id
        );
        this.furnitures = response.data;
        this.furnitureFrist = this.furnitures[0];
      } catch (error) {
        console.error(error);
      }
    },
    async InforFurniture(furniture) {
      this.furnitureIndex = furniture;
    },
    async handleAddToCart(furnitureIndex) {
      try {
        const response = await axios.post(
          "customer/cart/add?furnitureSpecificationId=" +
            furnitureIndex.furnitureSpecificationId +
            "&quantity=" +
            this.quantities
        );
        if (response.status === 200) {
          alert(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getMoreFurniture() {
      try {
        const response = await axios.get("/customer/furnitures");
        this.moreFurniture = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getUserFeedback() {
      try {
        const response = await axios.get("/customer/feedbacks");
        this.feedbacks = response.data;
        console.log(this.feedbacks);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
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
/* star */
.rating {
  padding-top: 1px;
}
.rating:not(:checked) > input {
  /* position: absolute; */
  float: left;
  appearance: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 20px;
  color: #666;
}

.rating:not(:checked) > label:before {
  content: "★";
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}

.h-32.scrollbar {
  overflow-x: scroll;
}

.snap-start {
  scroll-snap-align: start;
  flex: 0 0 auto;
}

/* all product */
.product {
  position: relative;
}
.furniture_label {
  position: absolute;
  /* width: 25%; */
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  top: 4%;
  left: 60%;
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
hr {
  transform: translateX(547%);
}
.furniture.detail.mt-3 {
  width: 225%;
}
</style>
