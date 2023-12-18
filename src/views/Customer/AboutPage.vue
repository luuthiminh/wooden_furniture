<template>
  <div class="nav pt-36 mb-2 max-md:pt-24">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
        <li class="breadcrumb-item font-semibold text-yellow-950">
          <router-link to="customerIndex">Home</router-link>
        </li>

        <li class="breadcrumb-item active font-medium" aria-current="page">
          About
        </li>
      </ol>
    </nav>
  </div>
  <div class="all pt-3 mx-28">
    <div
      class="grid grid-cols-6 gap-x-4 max-sm:block max-sm:mx-2 max-md:mx-4 max-md:grid-cols-6 max-md:gap-x-6"
    >
      <div class="menu_category mb-1 rounded-md max-sm:hidden pb-4">
        <div class="header px-2 py-2 rounded-t-md">
          <h1 class="font-medium text-sm">ALL Furniture</h1>
        </div>
        <ul class="sort leading-9 text-sm">
          <li
            @click="HandleFilterTips"
            class="font-medium text-base cursor-pointer py-2"
          >
            <i class="fa-solid fa-seedling pr-3 px-3"></i> Tips
          </li>
          <li
            @click="HandleFilterNews"
            class="font-medium text-base cursor-pointer py-2"
          >
            <i class="fa-regular fa-newspaper pr-3 px-3"></i> News
          </li>
        </ul>
      </div>
      <div class="some_post col-span-5 rounded-md px-6">
        <h1 class="font-semibold text-xl pb-3 text-slate-800">All Post</h1>

        <div class="">
          <div
            v-if="allTips.length"
            class="grid grid-cols-3 gap-x-4 max-sm:px-3 mb-5"
          >
            <div v-for="p in allTips" :key="p.postId">
              <div
                class="new_item px-2 py-2 shadow rounded-lg max-sm:mb-4 mb-4"
              >
                <div class="border border-indigo-500">
                  <router-link
                    :to="{
                      name: 'TipsFurniture',
                      params: { id: p.postId },
                    }"
                  >
                    <img :src="p.postImage" alt="image post" class="h-64" />
                  </router-link>
                </div>
                <div class="pt-3 px-3">
                  <span class="text-sm text-center font-medium">{{
                    p.postTitle
                  }}</span>
                  <br />
                  <div class="date">
                    <span class="text-center font-medium"
                      >Date: {{ p.creationDate }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else-if="allNews.length"
            class="grid grid-cols-3 gap-x-4 max-sm:px-3 mb-5"
          >
            <div v-for="p in allNews" :key="p.postId">
              <div
                class="new_item px-2 py-2 shadow rounded-lg max-sm:mb-4 mb-4 h-96"
              >
                <div class="border border-indigo-500 h-64 relative">
                  <router-link
                    :to="{
                      name: 'TipsFurniture',
                      params: { id: p.postId },
                    }"
                  >
                    <img :src="p.postImage" alt="image post" class="h-64" />
                  </router-link>
                </div>
                <div class="pt-3 px-3">
                  <span
                    class="text-sm text-center text-yellow-800 font-semibold"
                    >{{ p.postTitle }}</span
                  >
                  <div class="flex gap-x-2 text-slate-600 mt-3">
                    <p class="text-center font-semibold">Author:</p>
                    <p class="text-center font-medium">
                      {{ p.author }}
                    </p>
                  </div>
                  <div class="date">
                    <div class="flex gap-x-2 text-slate-600">
                      <span class="text-center font-semibold"
                        >Create Date:</span
                      >
                      <span class="text-center font-medium">
                        {{ p.creationDate }}</span
                      >
                    </div>
                  </div>
                  <div class="date">
                    <div class="flex gap-x-2 text-slate-600">
                      <span class="text-center font-semibold"
                        >Latest Update:</span
                      >
                      <span class="text-center font-medium">
                        {{ p.latestUpdate }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="grid grid-cols-3 gap-x-4 max-sm:px-3 mb-5">
            <div v-for="p in posts" :key="p.postId">
              <div
                class="new_item px-2 py-2 shadow rounded-lg max-sm:mb-4 mb-4"
              >
                <div class="border border-indigo-500">
                  <router-link
                    :to="{
                      name: 'TipsFurniture',
                      params: { id: p.postId },
                    }"
                  >
                    <img :src="p.postImage" alt="image post" class="h-64" />
                  </router-link>
                </div>
                <div class="pt-3 px-3">
                  <span
                    class="text-sm text-center text-yellow-800 font-semibold"
                    >{{ p.postTitle }}</span
                  >
                  <br />
                  <div class="flex gap-x-2 text-slate-600 mt-3">
                    <p class="text-center font-semibold">Author:</p>
                    <p class="text-center font-medium">
                      {{ p.author }}
                    </p>
                  </div>
                  <div class="date">
                    <div class="flex gap-x-2 text-slate-600">
                      <span class="text-center font-semibold"
                        >Create Date:</span
                      >
                      <span class="text-center font-medium">
                        {{ p.creationDate }}</span
                      >
                    </div>
                  </div>
                  <div class="date">
                    <div class="flex gap-x-2 text-slate-600">
                      <span class="text-center font-semibold"
                        >Latest Update:</span
                      >
                      <span class="text-center font-medium">
                        {{ p.latestUpdate }}</span
                      >
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
</template>
<script>
import axios from "axios";
import { format } from "date-fns";
export default {
  data() {
    return {
      posts: [],
      allTips: [],
      allNews: [],
    };
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    async getAllPosts() {
      try {
        const response = await axios.get("assistant/shop-data/posts");
        this.posts = response.data;
        this.posts = response.data.map((item) => ({
          ...item,
          creationDate: item.creationDate
            ? format(new Date(item.creationDate), "dd/MM/yyyy")
            : "",
          latestUpdate: item.latestUpdate
            ? format(new Date(item.latestUpdate), "dd/MM/yyyy")
            : "",
        }));
        console.log(this.posts);
      } catch (error) {
        console.error(error);
      }
    },
    HandleFilterTips() {
      this.allTips = this.posts.filter((p) => p.posType === "TIP");
      console.log(this.allTips);
    },
    HandleFilterNews() {
      this.allNews = this.posts.filter((p) => p.posType === "NEW");
      console.log(this.allNews);
    },
  },
};
</script>

<style scoped>
.menu_category .header h1 {
  color: white;
}
.menu_category {
  background: white;
  height: 118px;
  border: 1px solid rgb(195 195 195);
}
.menu_category .header {
  background-color: #997a64;
}
.menu_category i {
  opacity: 0.8;
}
.menu_category li {
  border-top: 1px solid #e1e0e0;
}
.sort i {
  padding-right: 10px;
  color: #50443c;
}
.moon hr,
.moon .bi.bi-hourglass-top,
.moon .bi-hourglass-bottom {
  color: #ffffff;
}
.new_item {
  height: 27em;
}
p,
span {
  font-size: 13px;
}
</style>
