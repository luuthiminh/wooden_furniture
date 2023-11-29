<template>
  <div class="forgot_password">
    <div class="border border-red-100 px-7 py-7 w-80 rounded-2xl bg-white">
      <div class="mt-3 mb-4 text-left text-xs text-slate-500">
        <span class="font-medium"
          >Please enter the email you want to send the password reset link
          to</span
        >
      </div>
      <form @submit.prevent="forgotPassword">
        <div class="mb-1">
          <div>
            <label for="exampleInputEmail1" class="form-label"
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
        <button
          type="submit"
          class="btn_send text-white cursor-pointer mt-2 px-1 py-1 mb-4"
        >
          Send
        </button>
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
    // async forgotPassword() {
    //   console.log(this.email);
    //   try {
    //     const response = await axios.post("Authentication/forgot-password", {
    //       params: { email: this.email },
    //     });
    //     if (response.status === 200) {
    //       localStorage.setItem("token", response.data.token);
    //       alert("Please confirm the link in your email!");
    //       this.$router.push({ name: "newPassword" });
    //     }
    //   } catch (error) {
    //     console.error("Error sending link your email:", error);
    //   }
    // },
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
  position: absolute;
  top: 20%;
  left: 38%;
}
.btn_send {
  background-color: #4f4c3d;
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
</style>
