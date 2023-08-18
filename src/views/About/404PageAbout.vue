<template>
  <div class="error_page text-center text-white text-xl">
    <p>The page seems to be missing. Perhaps it's time to go back</p>
    <router-link to="/customerIndex" class="underline hover:text-black"
      >home?</router-link
    >
  </div>
</template>
<style scoped>
.error_page {
  background-image: url("@/assets/images/404.png");
  background-position: center;
  background-size: cover;
  height: 720px;
  padding-right: 5em;
  padding-top: 40%;
}
</style>
