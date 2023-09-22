<template>
  <div class="forgot_password">
    <div class="border border-red-100 px-7 py-7 w-80 rounded-md bg-white">
      <div class="logo w-6/12">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <hr class="mb-14" />
      <form @submit.prevent="forgotPassword">
        <div class="mb-3">
          <div>
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input v-model="email" type="text" class="form-control required" />
          </div>
        </div>
        <button
          type="submit"
          class="btn_send text-white cursor-pointer mt-2 px-1 py-1 mb-4"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async forgotPassword() {
      console.log(this.email);
      try {
        const response = await axios.post(
          "customer/forgot-password?email=" + this.email
        );
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          alert("Please confirm the link in your email!");
          this.$router.push({ name: "newPassword" });
        }
      } catch (error) {
        console.error("Error sending link your email:", error);
      }
    },
  },
};
</script>
<style scoped>
.forgot_password {
  position: absolute;
  top: 20%;
  left: 38%;
}
.btn_send {
  background-color: #302924;
  width: 100%;
  border-radius: 4px;
}
.logo {
  transform: translateX(50%);
}
</style>
