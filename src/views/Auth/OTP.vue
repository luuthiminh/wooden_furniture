<template>
  <div
    class="all mx-72 border border-gray-600 h-72 my-32 bg-slate-50 rounded-lg"
  >
    <div class="header text-center py-6">
      <span class="text-xl my-6 pt-14 font-bold">Enter your OTP</span>
    </div>
    <div>
      <form id="Otp" @submit.prevent="OtpForm">
        <div>
          <input type="number" class="form-control w-10/12 ml-20" />
        </div>
        <div class="my-1">
          <!-- <button type="submit" class="btn my-8">Create</button> -->
          <router-link
            to="/customerIndex"
            class="btn bg-black text-white float-right mt-20 mr-20"
            >Complete</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped></style>
