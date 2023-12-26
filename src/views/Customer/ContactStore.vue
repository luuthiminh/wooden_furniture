<template>
  <div class="contact">
    <div class="nav pt-36 pb-3 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item font-semibold">
            <router-link to="customerIndex">Home </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="#">Contact Store</router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div class="mx-28 max-md:mx-4">
      <h1 class="font-semibold text-2xl pt-2 pb-4 text-yellow-900">
        Welcome to Luan Len Furniture Store
      </h1>
      <span
        ><strong class="text-yellow-950">Luan Len Furniture Store</strong> is
        proud to be the cheapest furniture factory in the North. With a modern
        equipped factory system, a team of experienced and creative architects
        and dedicated skilled workers. We always strive to create high quality,
        beautiful, unique, impressive interior products with leading
        prices.</span
      >
      <h3 class="font-semibold text-base my-4 text-yellow-900">Contact Us</h3>
      <div class="leading-10">
        <div>
          <span>1. Phone Number:</span>
          <p class="text-red-600">0398677620 (Zalo)</p>
        </div>
        <div>
          <span>2. Email:</span>
          <p>luuthiminh28062002hy@gmail.com</p>
        </div>
        <div>
          <span>3. Address:</span>
          <p>Quang Hung - Phu Cu - Hung Yen</p>
        </div>
        <div class="mb-10">
          <span>4. Facebook:</span>
          <p class="text-red-600">
            https://www.facebook.com/profile.php?id=61550767780663
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav {
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  color: #000000;
}
span {
  line-height: 27px;
  display: block;
  font-weight: 500;
  font-size: 15px;
  text-align: justify;
  word-wrap: break-word;
}

p {
  margin-left: 15px;
  font-weight: 500;
  font-size: 15px;
}

.moon span,
.moon h1,
.moon p {
  color: #f1ebe4;
}
.moon .text-yellow-900,
.moon .font-medium.text-sm.text-yellow-950 {
  color: wheat;
}
</style>
