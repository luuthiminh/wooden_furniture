<template>
  <div class="">
    <div
      class="flex flex-col items-center py-5 bg-white w-full h-full absolute"
    >
      <div class="py-6">
        <div class="logo w-3/12">
          <img
            src="@/assets/images/logo.png"
            alt="logo"
            class="w-6/12 ml-8 mb-2"
          />
        </div>
      </div>
      <p class="text-xl sm:text-3xl font-semibold text-gray-500 font-serif">
        Email confirmed
      </p>
      <p class="font-serif px-11 text-gray-500 py-3">
        L&L, We have sent a confirmation link to change your password via email
      </p>
      <div class="flex flex-col items-center py-5 bg-white w-full h-full">
        <img src="@/assets/images/icon_email.webp" alt="email" class="w-2/12" />
      </div>
      <p class="font-serif text-gray-700 text-center">
        Please click to link confirm to change your password!
      </p>
    </div>
  </div>
</template>
<style scoped>
.logo {
  transform: translateX(149%);
}
</style>
