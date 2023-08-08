<template>
  <header>
    <ul class="flex wrapper text-right header-top first-letter py-4">
      <li><i class="fa-solid fa-location-dot"></i>Hung Yen</li>
      <li><i class="fa-solid fa-phone"></i>+84 398677620</li>
      <li><i class="fa-regular fa-envelope"></i>minhltgch202050@gmail.com</li>
    </ul>

    <div class="grid mg-left-0">
      <div class="logo grid__item large--four-twelfths pd-left0">
        <img src="" alt="" />
      </div>

      <nav
        class="border-2 border-indigo-600 grid__item large--eight-twelfths text-right clearfix"
      >
        <ul class="flex gap-x-9 px-1">
          <li>Home</li>
          <li>All Products</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
          <li><i class="fa-solid fa-magnifying-glass"></i></li>
          <li><i class="fa-solid fa-user"></i></li>
          <li><i class="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </nav>
    </div>
  </header>
  <slot />
</template>
<style scoped>
.wrapper {
  padding-left: 50rem;
}
.wrapper li {
  padding-right: 10%;
}
nav {
  background-color: #302924;
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
nav li {
  padding-left: 40px;
}
.grid.mg-left-0 {
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
</style>
