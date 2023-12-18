<template>
  <div class="nav pt-36 mb-2 max-md:pt-24">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
        <li class="breadcrumb-item font-semibold text-yellow-950">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active font-medium" aria-current="page">
          Help Question
        </li>
      </ol>
    </nav>
  </div>
  <div class="all bg-neutral-50">
    <div class="grid grid-cols-4 mx-40">
      <div class="menu_about">
        <div class="col-span-1">
          <div class="border border-gray-600 leading-10 w-10/12 mb-4">
            <div class="menu text-center font-semibold text-stone-100">
              <span>MENU ABOUT</span>
            </div>
            <ul class="font-medium py-3 px-3">
              <li>
                <router-link to="/tips" class="font-medium text-base"
                  ><i class="fa-solid fa-seedling pr-3"></i> Tips</router-link
                >
              </li>
              <li>
                <router-link to="/news" class="font-medium text-base"
                  ><i class="fa-regular fa-newspaper pr-3"></i>
                  News</router-link
                >
              </li>
            </ul>
          </div>
          <div>
            <img class="w-10/12" src="@/assets/images/ad.png" alt="" />
          </div>
        </div>
      </div>
      <div class="some_post col-span-3 rounded-md px-6">
        <h1
          v-if="post.posType === 'TIP'"
          class="font-semibold text-xl pb-3 text-slate-800"
        >
          Tip
        </h1>
        <h1
          v-if="post.posType === 'NEWS'"
          class="font-semibold text-xl pb-3 text-slate-800"
        >
          News
        </h1>
        <div v-if="post" class="post bg-white rounded-md py-2 px-4">
          <div>
            <div>
              <h1 class="text-lg font-semibold">
                {{ post.postTitle }}
              </h1>
              <div class="text-sm flex gap-x-2">
                <p class="font-semibold">Author</p>
                <p class="font-medium">{{ post.author }}</p>
              </div>
              <span class="text-sm block"
                ><i class="fa-regular fa-calendar-days"></i>
                {{ post.creationDate }}</span
              >

              <img class="w-6/12 ml-56" :src="post.postImage" alt="imagePost" />

              <p class="line-clamp-5">
                {{ post.posContent }}
              </p>
            </div>
            <!-- <h2>
              1. Try to put together many long pieces of wood, you will have a
              dining table that is both classic and luxurious.
            </h2>
            <img class="w-6/12 ml-56" src="@/assets/images/tips/2.png" alt="" />
            <h2>
              2. However, if you want to renovate the bedroom, choose light wood
              to create a feeling of relaxation.
            </h2>
            <img class="w-6/12 ml-56" src="@/assets/images/tips/3.png" alt="" />
            <h2>
              3. Don't rush to throw away this extra piece of wood because it
              can turn into a modern and minimalist headboard in your bedroom.
            </h2>
            <img class="w-6/12 ml-56" src="@/assets/images/tips/4.png" alt="" />
            <h2>
              4. Who would have thought that an old wine barrel could be turned
              into a neat storage rack like this?
            </h2>
            <img class="w-6/12 ml-56" src="@/assets/images/tips/1.png" alt="" />
            <p>
              Many people always think that waste wood is a waste, so it is
              often wasted improperly. Have you ever thought about what a shelf
              made from old wine barrels or a drinking table made of bedspreads
              would look like? With just a little creativity and ingenuity, you
              can turn "junk" into vintage furniture like the 15 suggestions
              below! Many people always think that waste wood is a waste, so it
              is often wasted improperly. Have you ever thought about what a
              shelf made from old wine barrels or a drinking table made of
              bedspreads would look like? With just a little creativity and
              ingenuity, you can turn "junk" into vintage furniture like the 15
              suggestions below!
            </p>
          </div> -->
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
    };
  },
  created() {
    this.getAllPosts();
    console.log(this.tip);
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
  },
  computed: {
    post() {
      return this.posts.find(
        (post) => post.postId === parseInt(this.$route.params.id)
      );
    },
  },
};
</script>
<style scoped>
.menu {
  border-bottom: 1px solid rgb(225, 219, 219);
  background-color: #997a64;
}
.some_post p,
span,
h2 {
  text-align: justify;
  padding-top: 10px;
  padding-bottom: 8px;
}
h2 {
  font-weight: 500;
}
img {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
