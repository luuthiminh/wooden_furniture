<template>
  <div class="all mx-60">
    <div class="header text-xl my-6 pt-6 font-bold">
      <span class="">Enter your OTP</span>
    </div>
    <div>
      <form id="Otp" @submit.prevent="OtpForm">
        <div>
          <input type="number" class="form-control" />
        </div>
        <div class="my-1">
          <!-- <button type="submit" class="btn my-8">Create</button> -->
          <router-link to="/customerIndex" class="btn">Complete</router-link>
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
