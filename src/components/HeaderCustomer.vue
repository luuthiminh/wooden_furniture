<template>
  <header-cus />
  <header>
    <ul class="contact_header flex wrapper text-right first-letter py-4">
      <li><i class="fa-solid fa-location-dot"></i>Hung Yen</li>
      <li><i class="fa-solid fa-phone"></i>+84 398677620</li>
      <li><i class="fa-regular fa-envelope"></i>minhltgch202050@gmail.com</li>
    </ul>
    <div class="nav_header">
      <div class="grid mg-left-0 grid-cols-2">
        <div class="logo grid__item large--four-twelfths pd-lef0 ml-32">
          <img src="@/assets/images/logo.png" alt="logo" />
        </div>
        <nav
          class="border-2 border-yellow-700 grid__item large--eight-twelfths text-right clearfix"
        >
          <ul class="flex gap-x-9 px-1">
            <li><a href="">Home</a></li>
            <li><a href="">All Products</a></li>
            <li><a href="">Category</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li>
              <div class="search h-5">
                <form class="form">
                  <label for="search">
                    <input
                      required=""
                      autocomplete="off"
                      placeholder="search your chats"
                      id="search"
                      type="text"
                    />
                    <div class="icon">
                      <svg
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="swap-on"
                      >
                        <path
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <svg
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="swap-off"
                      >
                        <path
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </div>
                    <button type="reset" class="close-btn">
                      <svg
                        viewBox="0 0 20 20"
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </label>
                </form>
              </div>
            </li>
            <li>
              <a href=""><i class="fa-solid fa-user"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            </li>
            <a href="/">
              <li><i class="fa-solid fa-arrow-right-from-bracket"></i></li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <slot />
</template>

<script>
import HeaderCus from "@/components/HeaderCustomer.vue";

export default {
  components: { HeaderCus },
};
</script>

<style scoped></style>
