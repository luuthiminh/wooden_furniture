<template>
  <div class="all py-36">
    <div class="nav pb-3 mb-2">
      <nav aria-label="breadcrumb">
        <ol class="flex bg-none ml-28 max-sm:ml-3">
          <li class="breadcrumb-item">
            <router-link to="customerIndex">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="#">About</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="#">News</router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div class="grid grid-cols-4 mx-28 pt-2">
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
        <h1 class="font-semibold text-xl pb-3 text-slate-800">Tips</h1>
        <div class="post bg-white rounded-md py-2">
          <div>
            <h1 class="text-lg font-semibold">
              FINDING MULTI-FUNCTIONAL WOODEN CLOTHING CAN BE COMBINED WITH MANY
              TYPES
            </h1>
            <span class="text-sm"
              ><i class="fa-regular fa-calendar-days"></i> 18/8/2023</span
            >
            <p class="line-clamp-5">
              Many people always think that waste wood is a waste, so it is
              often wasted improperly. Have you ever thought about what a shelf
              made from old wine barrels or a drinking table made of bedspreads
              would look like? With just a little creativity and ingenuity, you
              can turn "junk" into vintage furniture like the 15 suggestions
              below!
            </p>
            <img class="w-6/12 ml-56" src="@/assets/images/news/4.png" alt="" />
            <p>
              Many people always think that waste wood is a waste, so it is
              often wasted improperly. Have you ever thought about what a shelf
              made from old wine barrels or a drinking table made of bedspreads
              would look like? With just a little creativity and ingenuity, you
              can turn "junk" into vintage furniture like the 15 suggestions
              below!
            </p>
            <img class="w-6/12 ml-56" src="@/assets/images/tips/1.png" alt="" />
          </div>
          <h2>
            1. Try to put together many long pieces of wood, you will have a
            dining table that is both classic and luxurious.
          </h2>
          <img class="w-6/12 ml-56" src="@/assets/images/news/4.png" alt="" />
          <h2>
            2. However, if you want to renovate the bedroom, choose light wood
            to create a feeling of relaxation.
          </h2>
          <img class="w-6/12 ml-56" src="@/assets/images/news/5.png" alt="" />
          <h2>
            3. Don't rush to throw away this extra piece of wood because it can
            turn into a modern and minimalist headboard in your bedroom.
          </h2>
          <img class="w-6/12 ml-56" src="@/assets/images/news/6.png" alt="" />
          <h2>
            4. Who would have thought that an old wine barrel could be turned
            into a neat storage rack like this?
          </h2>
          <img class="w-6/12 ml-56" src="@/assets/images/tips/1.png" alt="" />
          <p>
            Many people always think that waste wood is a waste, so it is often
            wasted improperly. Have you ever thought about what a shelf made
            from old wine barrels or a drinking table made of bedspreads would
            look like? With just a little creativity and ingenuity, you can turn
            "junk" into vintage furniture like the 15 suggestions below! Many
            people always think that waste wood is a waste, so it is often
            wasted improperly. Have you ever thought about what a shelf made
            from old wine barrels or a drinking table made of bedspreads would
            look like? With just a little creativity and ingenuity, you can turn
            "junk" into vintage furniture like the 15 suggestions below!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
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
.post {
  background-color: white;
}
.moon .post {
  background: transparent;
}
</style>
