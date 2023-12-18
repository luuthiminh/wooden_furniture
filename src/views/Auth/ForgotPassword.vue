<template>
  <div class="forgot_password">
    <div class="border border-red-100 px-7 py-7 w-80 rounded-2xl bg-white">
      <div class="logoforgot mb-3 pb-4">
        <div class="w-6/12">
          <img
            src="@/assets/images/logo.png"
            alt="logo"
            class="w-6/12 ml-8 mb-2 mt-10"
          />
        </div>
        <p class="font-bold text-2xl text-center text-yellow-900">L & L</p>
      </div>
      <div class="mt-3 mb-4 text-left text-xs text-slate-500">
        <span class="font-medium"
          >Please enter the email you want to send the password reset link
          to</span
        >
      </div>
      <form @submit.prevent="forgotPassword">
        <div class="mb-1">
          <div>
            <label
              for="exampleInputEmail1"
              class="form-label font-semibold text-yellow-950"
              >Email address</label
            >
            <input
              v-model="email"
              type="text"
              placeholder="Enter your email"
              class="form-control required"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-1 mt-10 mb-2">
          <button
            type="submit"
            class="btn_send text-white cursor-pointer px-1 py-1 mb-4"
          >
            Send
          </button>
          <router-link to="/login" class="text-decoration-none">
            <div class="bg-yellow-800 rounded-md text-center">
              <span type="button" class="px-4 py-1 text-white"> Cancel </span>
            </div>
          </router-link>
        </div>
      </form>
      <p class="signup-link mt-2">
        Don't have an account?
        <a href="/register" class="signup-link link"> Sign up now</a>
      </p>
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
          "Authentication/forgot-password?email=" + this.email
        );
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          alert("Please confirm the link in your email!");
          this.$router.push({ name: "ComfirmEmail" });
        }
      } catch (error) {
        console.error("Error sending link your email:", error);
      }
    },
  },
};
</script>
<style scoped>
.form-label {
  font-size: 15px;
}
.form-control {
  font-size: 14px;
}

.forgot_password {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #2d2c2cd9;
}
.btn_send {
  background-color: royalblue;
  width: 100%;
  border-radius: 7px;
}
.logo {
  transform: translateX(50%);
}
.signup-link {
  align-self: center;
  font-weight: 400;
  font-size: 14px;
}

.signup-link .link {
  font-weight: 500;
  color: #2d79f3;
}

.link:hover {
  text-decoration: underline;
}
.logoforgot {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px dashed gray;
}
</style>
